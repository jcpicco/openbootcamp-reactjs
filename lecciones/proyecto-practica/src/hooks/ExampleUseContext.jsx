/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 * 
 * Buscamos propagar la información sin necesidad de props con el contexto.
 * El contexto evita que la información tenga que pasar por múltiples
 * componentes anidados antes de llegar al que queremos: la propagación de
 * información es directa.
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse con los
    // datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: {state.token} {/* El padre me pasa el token */}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        );
    }


    return (
        <div>
            <miContexto.Provider value={sessionData}> {/* Aquí definimos el valor del contexto */}
                {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
                {/* Además, si se ectualiza, los componentes de aquí, también lo actualizan */}
                <h1>**** Ejemplo de useState() y useContext()****</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesión</button>
            </miContexto.Provider>
            {/* <Componente1></Componente1> */} {/* Aquí fuera está sin contexto, por lo que daría error */}
        </div>
    )
}


