import React, { useState } from 'react';


let red = 0;
let green = 200;
let blue = 100;

// Login button
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button onClick={ loginAction } style={ propStyle }>Login</button>
    );
};

// Logout button
const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button onClick={ logoutAction } style={ propStyle }>Logout</button>
    );
};

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}


const OptionalRender = () => {
    let optionalButton;
    const [access, setaccess] = useState(true);
    const [nMessages, setnMessages] = useState(0);

    // const updateAccess = () => {
    //     setaccess(!access);
    // };

    const loginAction = () => {
        setaccess(true);
    }

    const logoutAction = () => {
        setaccess(false);
    }

    if (access) {
        optionalButton = (<LogoutButton logoutAction={ logoutAction } propStyle={ loggedStyle }></LogoutButton>);
    } else {
        optionalButton = (<LoginButton loginAction={ loginAction } propStyle={ unloggedStyle }></LoginButton>);
    }

    // Unread messages
    let addMessages = () => {
        setnMessages(nMessages + 1);
    }


    return (
        // ? (Expresión true) && expresión => Se renderiza la expresión
        // ? (Expresión false) && expresión => NO se renderiza la expresión
        <div>
            {/* Optional button */}
            { optionalButton }
            {/* N messages unread */}
            {/* { nMessages === 0 && (<p>There are no new messages...</p>) }
            { nMessages === 1 && (<p>You have { nMessages } new message...</p>) }
            { nMessages > 1 && (<p>You have { nMessages } new messages...</p>) } */}
            {/* Operador ternario */}
            { access ? (
                <div>
                    { nMessages > 0 ?
                    (<p>You have { nMessages } new message{ nMessages > 1 ? 's' : null }...</p>) :
                    (<p>There are no new messages</p>) }
                    <button onClick={ addMessages }>{ nMessages === 0 ? 'Add your first message' : 'Add new message' }</button>
                </div>) : null }
            
        </div>
    );
}


export default OptionalRender;