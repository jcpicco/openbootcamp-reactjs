import React, { useState } from 'react'; // useState sirve para agregar la funcionalidad de estados a los componentes función
import PropTypes from 'prop-types';


const GreetingFunction = (props) => {
    const [age, setAge] = useState(29); // Formato: [variable, método de actualización de estado]

    const birthday = () => {
        // actualizamos la edad
        setAge(age + 1);
    }

    return (
        <div>
            <h1>¡Hola { props.name } desde componente función!</h1>
            <h2>Tu edad es de { age }</h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    );
};


GreetingFunction.propTypes = {
    name: PropTypes.string
};


export default GreetingFunction;
