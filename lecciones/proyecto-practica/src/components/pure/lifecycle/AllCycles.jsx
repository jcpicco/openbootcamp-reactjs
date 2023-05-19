/**
 * 1. Cuando el componente aparece se genera un intervalo.
 * 2. Cuando se actualiza el componente se vuelve a ejecutar.
 * 3. Cuando el componente desaparece se detiene el intervalo y
 * se ejecuta algo (todo en el return).
 */

import React, {useEffect} from 'react';


const Allcycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualización del componente')
        }, 1000); // Cada segundo imprime algo por consola

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        }
    }, []);


    return (
        <div>
            
        </div>
    );
}


export default Allcycles;
