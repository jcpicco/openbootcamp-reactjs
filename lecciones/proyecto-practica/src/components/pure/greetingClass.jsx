import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GreetingClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: 24
        };
    }

    render() {
        return (
            <div>
                <h1>¡Hola { this.props.name }!</h1>
                <h2>Tu edad es de { this.state.age }</h2>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        )); // this.state es immutable. Con setState() podemos cambiar el estado. Un nuevo estado regenera el componente
    };
}


GreetingClass.propTypes = {
    name: PropTypes.string              // Especificamos el tipo de dato para que solamente soporte ese tipo para la propiedad
};


export default GreetingClass;
