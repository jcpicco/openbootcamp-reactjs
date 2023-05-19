import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/taskComponent';


const TaskListComponent = () => {
    const defaultTask = new Task("Ejemplo", "Descripción por defecto", false, LEVELS.NORMAL);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);

        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks])

    const changeCompleted = () => {
        console.log("TODO: Cambiar estado de una tarea");
    }

    const changeLoading = () => {
        setLoading(loading ? false : true);
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
