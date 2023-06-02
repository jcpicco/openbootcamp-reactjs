import React from 'react';

// Material UI Components
import { Link, Typography } from '@mui/material';


const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'> {/* Variant es el tipo de texto que vamos añadir */}
            { 'Copyright (C)' }
            <Link color='inherit' href='https://www.imaginaformacion.com'>
                Imagina Formación
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    );
}


export default Copyright;
