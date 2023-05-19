/**
 * Ejemplo de uso del método
 * de ciclo de vida en componete clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }, []) // Queremos que se ejecute una sola vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


