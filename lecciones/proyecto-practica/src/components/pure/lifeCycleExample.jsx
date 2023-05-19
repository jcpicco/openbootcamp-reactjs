/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida.
 */

import React, { Component } from 'react'


class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje de componentes');
    }

    componentDidMount() {
        console.log('DIDMOUNT: Cuando el componente ya está montado, pero antes de pintar');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Antes de recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULDCOMPONENTUPDATE: True o false. Controlar si el componente debe actualizarse o no, dependiente de las props o el estado');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Después de actualizarse');
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


lifeCycleExample.propTypes = {

}

export default lifeCycleExample