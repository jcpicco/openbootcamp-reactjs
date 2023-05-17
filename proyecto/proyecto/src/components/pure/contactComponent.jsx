import { Contact } from '../../models/contact.class';
import PropTypes from 'prop-types';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h5>Nombre: { contact.name }</h5>
            <h5>Apellido: { contact.lastName }</h5>
            <h5>Email: { contact.email }</h5>
            <h5>Contacto { contact.connected ? "En Línea" : "No Disponible" }</h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
