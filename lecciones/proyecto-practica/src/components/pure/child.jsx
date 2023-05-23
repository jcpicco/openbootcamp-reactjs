import React, { useRef } from 'react';


const Child = ({ name, send, update }) => {
    const messageRef = useRef(''); // Lo usaremos para tener información persistente del input
    const nameRef = useRef('Juanma'); // Lo usaremos para tener información persistente del input

    function pressButton () {
        const text = messageRef.current.value;
        alert(`Text in input ${text}`);
    }

    function pressButtonParams (text) {
        alert(`Text: ${text}`);
    }

    function submitName (e) {
        e.preventDefault(); // Si no prevenimos esto la vista del componente se refrescará al submit y se va a recuperar el valor inicial
        update(nameRef.current.value)
    }


    return (
        <div style={ {background: 'orange', padding: '30px'} }>
            <p onMouseOver={ () => console.log('On Mouse Over') }>Hello, { name }</p>
            <button onClick={ () => console.log('Pressed button') }>
                Button 1
            </button>
            <button onClick={ pressButton }> {/* No se añade paréntesis porque la función se pasa como argumento, es decir, no se ejecuta como tal */}
                Button 2
            </button>
            <button onClick={ () => pressButtonParams('Hello') }> {/* Si ponemos paréntesis y el argumento de la función se va a ejecutar al abrir la web. Añadimos al principio "() => " para tomarlo como función flecha */}
                Button 3
            </button>
            <input
                placeholder='Send a text to your father'
                onFocus={ () => console.log('Input Focused') }
                onChange={ (e) => console.log('Input changed:', e.target.value) }
                onCopy={ () => console.log('Copied text from input') }
                ref={ messageRef }
            /> {/* Todos los que empiezan por "on" son eventos */}
            <button onClick={ () => send(`I'm ${name}, ${messageRef.current.value}`) }>Send message</button> {/* Conexión entre padre e hijo: el hijo va a enviar un mensaje al padre */}
            <div style={ {marginTop: '20px'} }>
                <form onSubmit={ submitName }>
                    <input placeholder='New name' ref={ nameRef }/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}


export default Child;
