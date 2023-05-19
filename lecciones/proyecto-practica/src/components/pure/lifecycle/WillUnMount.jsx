/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}


export const WillunmountHook = () => {

    useEffect(() => {
        // Aquí no ponemos nada. En el return se añade lo que queremos que se ejecute cuando el componente termine. La razón es porque simplemente así funciona el ciclo de vida
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []); // Queremos que se ejecute una sola vez

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}


