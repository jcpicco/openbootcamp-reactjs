import React, { useState, useEffect } from 'react';
import TaskComponent from '../pure/taskComponent';
import TaskFormik from '../pure/forms/taskFormik';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Importamos la hoja de estilos task.scss
import '../../styles/task.scss';


const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    // Control del ciclo de vida del componente
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        console.log(`Task State has been modified: ${loading}`);

        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks, loading])

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

    const TableDisplay = () => {
        return(
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
                    ) }
                </tbody>
            </table>
        );
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = (<TableDisplay></TableDisplay>);
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to solve</h3>
                <h4>Please, create one</h4>
            </div>
        );
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    };

    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('credentials');
        history.push('/login');
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
                    {/* TODO: Add loading spinner */}
                    { loading ? (<p style={ loadingStyle }>Loading tasks</p>) : tasksTable }
                </div>
            </div>
            <TaskFormik add={ addTask } length={ tasks.length }></TaskFormik>
            <hr/>
            <Button variant="contained" onClick={ logout }>Logout</Button>
        </div>
    );
};


export default TaskListComponent;
