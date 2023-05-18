import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/taskComponent';


const TaskListComponent = () => {
    const defaultTask = new Task("Ejemplo", "Descripción por defecto", false, LEVELS.NORMAL);
    // eslint-disable-next-line
    const changeState = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    }

    
    return (
        <div>
            <div>
                <h1>Tus tasks:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista de tasks */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
