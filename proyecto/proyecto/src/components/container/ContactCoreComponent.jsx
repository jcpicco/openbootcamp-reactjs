import React, { useState } from 'react';
import ContactComponent from '../pure/contactComponent';
import { Contact } from '../../models/contact.class';

// Importamos la hoja de estilos task.scss
import '../../styles/task.scss';
import Contactform from '../pure/forms/contactForm';


const ContactCoreComponent = () => {
    let contact1 = new Contact('Juan', 'Consi', 'jmconsi@gmail.com', true);
    let contact2 = new Contact('Pepe', 'Perez', 'pepito94@gmail.com', false);
    let contact3 = new Contact('Marina', 'Uwu', 'marinauwu@hotmail.com', false);
    const [contacts, setcontacts] = useState([contact1, contact2, contact3]);


    const connectContact = ((contact) => {
        const ContactIndex = contacts.indexOf(contact);
        const tempContacts = [...contacts];

        tempContacts[ContactIndex].connected = !tempContacts[ContactIndex].connected;
        setcontacts(tempContacts);
    });

    const addContact = ((contact) => {
        const tempContacts = [...contacts];

        tempContacts.push(contact);
        setcontacts(tempContacts);
    });

    const removeContact = ((contact) => {
        const ContactIndex = contacts.indexOf(contact);
        const tempContacts = [...contacts];

        tempContacts.splice(ContactIndex, 1);
        setcontacts(tempContacts);
    });


    return (
        <div className='col-12'>
            <div className='card'>
                <div className='card-header'>
                    <h5>
                        Your contacts:
                    </h5>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Last name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Connected</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map((contact, index) => {
                                return (
                                        <ContactComponent 
                                            key={ index } 
                                            contact={ contact }
                                            connect={ () => connectContact(contact) }
                                            remove={ () => removeContact(contact) }>
                                        </ContactComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                <Contactform add={ addContact }></Contactform>
            </div>
        </div>
    );
};


export default ContactCoreComponent;
