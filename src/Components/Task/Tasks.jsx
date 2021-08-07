import React, { useContext } from 'react';
import TaskContext from '../../Contexts/TaskContext';
import TaskItem from './TaskItem';

const Tasks = () => {
    return (
        <div className="card w-50 addcard p-2">

            <h5 className="alert alert-info">لیست کارهای ثبت شده</h5>
            <TaskItem />
        </div>
    );
}

export default Tasks;