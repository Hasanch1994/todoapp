import React, { createContext } from 'react';


const TaskContext = createContext({
    taskname: "",
    catname: "",
    uuid: "",
    read: false,
    tasks: [],
    handlesetread: () => { },
    handleDelete: () => { },
    handleAddNewTask: () => { },
    setTaskName: () => { },
    setCatName: () => { }
})


export default TaskContext;