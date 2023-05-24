import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/taskComponent';

// Importamos la hoja de estilos task.scss
import '../../styles/task.scss';
import Taskform from '../pure/forms/taskForm';


const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);

        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks])

    const completeTask = (task) => {
        console.log("Complete this task:", task);

        const taskIndex = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[taskIndex].completed = !tempTasks[taskIndex].completed;

        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }


    const deleteTask = (task) => {
        console.log("Delete this task:", task);

        const taskIndex = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(taskIndex, 1);

        setTasks(tempTasks);
    }

    const changeLoading = () => {
        setLoading(loading ? false : true);
    }

    
    return (
        <div className='col-12'>
            <div className='card'>
                {/* Card Header (title) */}
                <div className='card-header p-3'> {/* p-3 es el padding */}
                    <h5>
                        Your Tasks:
                    </h5>
                </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tasks.map((task, index) => {
                                return (
                                        <TaskComponent 
                                            key={ index } 
                                            task={ task }
                                            complete={ completeTask }
                                            remove={ deleteTask }>
                                        </TaskComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                <Taskform add={ addTask }></Taskform>
            </div>
        </div>
    );
};


export default TaskListComponent;
