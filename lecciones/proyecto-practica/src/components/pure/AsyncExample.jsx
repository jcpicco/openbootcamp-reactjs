import React from 'react';


const AsyncExample = () => {
    async function generateNumber () {
        return 1;
    }

    /** Las promesas son la manera principal de gestionar objetos que se van a generar o van a fallar en su generación. Sus funciones son:
     * - resolve: Devolver el dato final
     * - all: Devolver todos los resultados de varias promesas
     * - reject: Generar una promesa que ha sido rechazada por algún tipo de error
     * - race: Resolver una promesa dependiente de que se resuelvan otras promesas
     * - allSettled: Comprobar cuando todas las promesas están listas
     * - any: Comprobar si cualquiera de las promesas han sido completadas
     */
    async function generatePromiseNumber() {
        return Promise.resolve(2);
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`)); // Nos aseguramos de que ejecutamos la alerta en el momento en el que recuperamos el número de la función asíncrona
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`)); // Funciona igual que el otro
    }

    async function saveSessionStorage (key, value) {
        // await sessionStorage.setItem(key, value); // Es una manera de asegurar el control sobre las funciones
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key));
    }

    // then devuelve algo, catch devuelve la reason de un error y finally es una función void (no devuelve nada)
    function showStorage () {
        saveSessionStorage('name', 'Juanma')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`);
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('SUCCESS: Name saved and retreived'));
    }

    async function obtainMessage () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000);
        })

        let message = await promise;
        await alert(`Message received: ${message}`);
    }

    // Función flecha asíncrona
    const returnError = async () => {
        await Promise.reject(new Error('Oooooops!'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'));
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com');
            alert(`Response: ${JSON.stringify(response)}`);

        } catch (error) {
            alert(`Something went wrong with your URL: ${error} (check your console)`);

        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        )
        .catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`));
    }


    return (
        <div>
            <h1>Async, Promise Examples</h1>
            <button onClick={ obtainNumber }>Obtain Number</button>
            <button onClick={ obtainPromiseNumber }>Obtain Promise Number</button>
            <button onClick={ showStorage }>Save Name and Show</button>
            <button onClick={ obtainMessage }>Send message in 2 seconds</button>
            <button onClick={ consumeError }>Obtain Error</button>
            <button onClick={ urlNotFound }>Request to unknown URL</button>
            <button onClick={ multiplePromise }>Multiple Promises</button>
        </div>
    );
}


export default AsyncExample;
