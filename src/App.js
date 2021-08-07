import React, { useState, useEffect } from 'react';
import AddNewTask from './Components/Task/AddNewTask';
import Header from './Components/Commons/Header';
import Tasks from './Components/Task/Tasks';
import { GenerateUUid } from '../src/Utils/UUID'
import TaskContext from './Contexts/TaskContext';

const App = () => {

  const [taskname, settaskname] = useState("");
  const [catname, setcatname] = useState("");
  const [uuid, setuuid] = useState("");
  const [tasks, settasks] = useState([]);
  const [read, setread] = useState(false);



  const handleAddNewTask = () => {

    const taskss = [...tasks];


    const uuid = GenerateUUid();
    setuuid(uuid);


    const obj = {

      id: uuid,
      taskname: taskname,
      catname: catname,
      read: read
    }

    if (taskname !== null && catname !== null && uuid != null) {
      taskss.push(obj);
      settasks(taskss);
      settaskname("");
      clearState();
      alert('اضافه شد')
    } else {
      alert('خطایی رخ داده است')

    }
  }

  const setTaskname = (event) => {
    const value = event.target.value;
    console.log("task name is: " + value)
    if (value !== null) {
      settaskname(value);
    }
  }

  const clearState = () => {
    settaskname("");
    setcatname("");
    setuuid("");
  }

  const handSetread = id => {
    console.log(id)
    const taskks = [...tasks];
    console.log(taskks)
    taskks.map(p => (
      console.log(p.id)
    ))
    const index = taskks.findIndex(i => (i.id === id));
    console.log(index)
    const task = taskks[index];
    console.log(task)
    task.read = !task.read;
    taskks[index] = task;
    settasks(taskks);
  }

  const handDelete = id => {
    const taskks = [...tasks];
    const filtered = taskks.filter(i => i.id !== id);
    settasks(filtered);
  }

  const setCatname = (event) => {
    const value = event.target.value;
    console.log("catud " + value)
    switch (value) {
      case 1: setcatname("کارهای شخصی");
      case 2: setcatname("ورزش");
      case 3: setcatname("سرکار");
    }

  }

  return (
    <TaskContext.Provider
      value={{
        taskname: taskname,
        catname: catname,
        uuid: uuid,
        read: read,
        tasks: tasks,
        handlesetread: handSetread,
        handleDelete: handDelete,
        handleAddNewTask: handleAddNewTask,
        setTaskName: setTaskname,
        setCatName: setCatname
      }}>

      <div>

        <Header />

        <AddNewTask />


        <Tasks />

      </div>
    </TaskContext.Provider >

  );
}

export default App;
