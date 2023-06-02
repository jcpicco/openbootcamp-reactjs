import React from 'react';
import { useHistory } from 'react-router-dom';

import Copyright from '../../components/pure/Copyright';

import { Button } from '@mui/material';


const DashboardPage = () => {
    const history = useHistory();

    const logout = () => {
        history.push('/login');
    }


    return (
        <div>
            <Button variant="contained" onClick={ logout }>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}


export default DashboardPage;
