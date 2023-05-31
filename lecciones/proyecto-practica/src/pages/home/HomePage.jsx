import React from 'react';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const HomePage = () => {
    const location = useLocation();
    const history = useHistory();

    console.log(`We are in Route: ${location.pathname}`);

    const navigateTo = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ () => navigateTo('/profile') }>
                Go to profile
            </button>
            <button onClick={ goBack }>
                Go Back
            </button>
            <button onClick={ goForward }>
                Go Forward
            </button>
        </div>
    );
}


export default HomePage;
