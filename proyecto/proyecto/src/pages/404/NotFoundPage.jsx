import React from 'react';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const NotFoundPage = () => {
    const location = useLocation();
    const history = useHistory();

    console.log(`We are in Route: ${location.pathname}`);

    const navigateTo = (path) => {
        history.push(path);
    }


    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={ () => navigateTo('/') }>
                Go back to home
            </button>
        </div>
    );
}


export default NotFoundPage;
