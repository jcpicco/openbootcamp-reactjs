import React from 'react';
import { useLocation } from 'react-router-dom';


const StatePage = () => {
    const location = useLocation();

    console.log('Query Params:', location.search); // Query Params sent


    return (
        <div>
            <h1>State: { location.state.online ? 'The user is Online' : 'The user is Offline' }</h1>
            <h1>Query Params: { location.search }</h1>
        </div>
    );
}


export default StatePage;
