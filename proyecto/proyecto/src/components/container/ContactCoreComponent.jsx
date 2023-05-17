import React, { useState } from 'react';
import ContactComponent from '../pure/contactComponent';
import { Contact } from '../../models/contact.class';



const ContactCoreComponent = (props) => {
    const [connected, setConnected] = useState(props.connected)
    let contact = new Contact(props.name, props.lastName, props.email, connected);

    const cambioEstado = () => {
        setConnected(connected ? false : true);
    }

    return (
        <div>
            <div>
                <h2>Contacto:</h2>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista de tasks */}
            <ContactComponent contact={contact} ></ContactComponent>
            <div>
                <button onClick={cambioEstado}>Conectarse/Desconectarse</button>
            </div>
        </div>
    );
};


export default ContactCoreComponent;
