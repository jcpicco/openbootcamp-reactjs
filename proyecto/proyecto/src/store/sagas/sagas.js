import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { API_CALL_REQUEST } from '../actions/asyncActions';


// Watcher SAGA
// Listens the API_CALL_REQUEST actions
export function* watcherSaga(){
    // Listens the action and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga) // takeLatest activa la saga en el background para todas las acciones de API_CALL_REQUEST, y se activa el worker cuando se hagan.
}

// WORKER SAGA
// Is called from watcher Saga, does the Login and Dispaches an action
export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request)) // Instruye el middleware para llamar a la función correspondiente
        // We Obtain the token from response
        const token = response.data.token;
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                token: token
            }
        }); // Emite esta información si todo funciona correctamente
    } catch (error) {
        yield put({
            type: action.payload.failAction, // API_CALL_FAILURE
            payload: {
                error: error
            }
        });
    }
}

function fetchHttp(request){
    return function(){
        return(axios(request))
    } // Le devolvemos una función que nos devuelve la respuesta a axios
}