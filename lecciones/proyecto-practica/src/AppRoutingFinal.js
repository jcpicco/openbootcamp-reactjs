import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import DashboardPage from './pages/dashboard/DashboardPage';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';


function AppRoutingFinal() {
    // TODO: Cambiar por valor de localStorage/sessionStorage
    let loggedIn = true;

    return (
        <div>
            <Router>
                <Switch>
                    {/* Redirecciones para proteger nuestras rutas */}
                    <Route exact path='/'>
                        { loggedIn ? (<Redirect from='/' to='/dashboard'/>) : (<Redirect from='/' to='/login'/>) }
                    </Route>
                    {/* Ruta login */}
                    <Route exact path='/login' component={ LoginPage }/>
                    {/* Ruta dashboard */}
                    <Route exact path='/dashboard'>
                        { loggedIn ? (<DashboardPage/>) : (<Redirect from='/' to='/login'/>) }
                    </Route>
                    {/* Ruta 404 - Not found */}
                    <Route component={ NotFoundPage }/>
                </Switch>
            </Router>
        </div>
    );
}


export default AppRoutingFinal;
