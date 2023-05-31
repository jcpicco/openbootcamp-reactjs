import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const TaskDetailPage = ({ task }) => {
    const {id} = useParams();


    return (
        <div>
            <h1>Task Detail - { id }</h1>
            <h2>{ task.name }</h2>
            <h3>{ task.description }</h3>
        </div>
    );
}


export default TaskDetailPage;
