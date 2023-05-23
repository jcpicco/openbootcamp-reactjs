import React, { useState } from 'react';
import Child from '../pure/child';


const Father = () => {
    const [name, setname] = useState('Juanma');

    function showMessage (text) {
        alert(`Message received: ${text}`);
    }

    function updateName (newName) {
        setname(newName)
    }

    return (
        <div style={ {background:'red', padding:'10px'} }>
            <Child name={ name } send= { showMessage } update={ updateName }></Child> {/* Añadimos como parámetro la función a ejecutar en el hijo en las props */}
        </div>
    );
};


export default Father;
