import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.json';

// IMPORTANTE: Los estilos propios deben ir debajo de Bootstrap para que no los pise
import './index.css';
import App from './App';
import AppRouting from './AppRouting';
import AppReduxSaga from './AppReduxSaga';
import reportWebVitals from './reportWebVitals';

// Redux Imports:
import { Provider } from 'react-redux';
// Import Config Function of App Store
import { createAppStore, createAppAsyncStore } from './store/config/storeConfig';

// We create the App Store
let appStore = createAppStore();
let appAsyncStore = createAppAsyncStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
      <App />
      {/* <AppReduxSaga /> */}
      {/* <AppRouting/> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
