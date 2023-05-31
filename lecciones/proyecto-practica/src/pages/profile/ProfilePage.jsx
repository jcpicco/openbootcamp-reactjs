import React from 'react';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const ProfilePage = ({ user }) => {
    const location = useLocation();
    const history = useHistory();

    console.log(`We are in Route: ${location.pathname}`);

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }


    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={ goBack }>
                Go Back
            </button>
            <button onClick={ goForward }>
                Go Forward
            </button>
        </div>
    );
}


export default ProfilePage;
