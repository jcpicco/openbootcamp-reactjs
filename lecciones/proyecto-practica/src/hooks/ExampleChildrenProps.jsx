/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const ExampleChildrenProps = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintará por defecto aquello que se
            encuentre entre las etiquetas de apertura y cierre de
            este componente, desde el componente de orden superior
            (que en este caso es el <h3> de App.js). */}
            { props.children }
        </div>
    );
}

export default ExampleChildrenProps;
