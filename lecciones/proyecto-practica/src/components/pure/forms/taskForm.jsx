import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const Taskform = ({add}) => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);


    function addTask(e){
        e.preventDefault(); // Casi siempre se previene el por defecto cuando la acción es submit
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        ); // False es el valor por defecto de completed
        add(newTask);
    }

    /**
     * - Muy importante poner IDs a los labels.
     * - Todas las className son de Bootstrap, y definen el estilo.
     * - required y autoFocus son para que sea campo obligatorio y se enfoque directamente en ese campo.
     */
    return (
        <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>

    );
}


Taskform.protoTypes = {
    add: PropTypes.func.isRequired
}

export default Taskform;