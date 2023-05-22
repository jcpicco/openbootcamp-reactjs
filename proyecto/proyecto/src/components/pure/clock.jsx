import React, { useState, useEffect } from 'react';


const Clock = () => {
    const [state, setstate] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Juanma',
        apellidos: "Consigliere Picco"
    }); // Estado privado del componente { fecha: null, edad: null, nombre: null, apellidos: null }

    useEffect(() => {
        const tick = () => {
            setstate({
                ...state,
                fecha: new Date(),
                edad: state.edad + 1
            });
        };

        const timerID = setInterval(() => { tick() }, 1000); // Cada segundo imprime algo por consola

        return () => {
            clearInterval(timerID);
        }
    }, [state]);


    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
}


export default Clock;