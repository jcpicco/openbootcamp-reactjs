import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const Contactform = ({ add }) => {
    const nameRef = useRef('');
    const lastName = useRef('');
    const email = useRef('');


    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastName.current.value,
            email.current.value,
            false
        );
        add(newContact);
    }

    /**
     * - Muy importante poner IDs a los labels.
     * - Todas las className son de Bootstrap, y definen el estilo.
     * - required y autoFocus son para que sea campo obligatorio y se enfoque directamente en ese campo.
     */
    return (
        <form onSubmit={ addContact } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact name'/>
                <input ref={lastName} id='inputLastName' type='text' className='form-control form-control-lg' required placeholder='Contact last name'/>
                <input ref={email} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Contact email'/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>

    );
}


Contactform.protoTypes = {
    add: PropTypes.func.isRequired
}

export default Contactform;