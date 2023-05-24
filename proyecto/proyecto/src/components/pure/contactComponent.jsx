import { Contact } from '../../models/contact.class';
import PropTypes from 'prop-types';


const ContactComponent = ({ contact, connect, remove }) => {
    /**
     * Function that returns icon depending on completion of the task
     */
    function contactConnectedIcon(){
        if(contact.connected){
            return (<i onClick={ () => connect(contact) } className='bi bi-person-circle task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={ () => connect(contact) } className='bi bi-x-circle task-action' style={{color: 'red'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.lastName }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.email}</span>
            </td>
            <td className='align-middle'>
                { contactConnectedIcon() }
                <i onClick={ () => remove(contact) } className='bi bi-trash task-delete' style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
