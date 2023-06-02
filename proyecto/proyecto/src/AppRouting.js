import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TaskListComponent from './components/container/taskListComponent';


function AppRouting() {
    // TODO: Cambiar por valor de localStorage/sessionStorage
    let logged = localStorage.getItem('credentials');

    return (
        <div>
            <Router>
                <Switch>
                    {/* Redirecciones para proteger nuestras rutas */}
                    <Route exact path='/'>
                        { logged ? (<Redirect to='/tasks'/>) : (<Redirect to='/login'/>) }
                    </Route>
                    {/* Ruta login */}
                    <Route exact path='/login' component={ LoginPage }/>
                    {/* Ruta login */}
                    <Route exact path='/register' component={ RegisterPage }/>
                    {/* Ruta tasks */}
                    <Route exact path='/tasks'>
                        { logged ? (<TaskListComponent/>) : (<Redirect to='/login'/>) }
                    </Route>
                    {/* Ruta 404 - Not found */}
                    <Route component={ NotFoundPage }/>
                </Switch>
            </Router>
        </div>
    );
}


export default AppRouting;
