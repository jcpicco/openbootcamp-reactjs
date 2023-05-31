import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const TaskDetailPage = () => {
    const {id} = useParams();


    return (
        <div>
            <h1>Task Detail - { id }</h1>
        </div>
    );
}


export default TaskDetailPage;
