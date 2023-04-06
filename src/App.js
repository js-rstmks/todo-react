import React, { useState } from 'react'
import data from "./data.json"
//components
import Header from "./Header.js"
import ToDoList from "./ToDoList.js"
import ToDoForm from "./ToDoForm.js"
import DatePicker from 'react-datepicker';
import "./index.css"
// import { toast } from 'react-toastify';
// import "./Toast.css"

 
import './App.css';
// import { ToastContainer } from 'react-toastify'
 
function App() {
    const [ toDoList, setToDoList ] = useState(data)
    const [startDate, setStartDate] = useState(new Date());
    const [errMsg, setErrMsg] = useState('')


    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
        return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
        return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput, userSelect) => {

        if (userInput === "") {
            // toast.success('please entry a task');

            return
        }

        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false, category: userSelect }];
        setToDoList(copy);
    }
    const removeToDo = (e) => {
        e.preventDefault()
        const clickTask = e.target.previousElementSibling.firstElementChild.textContent
        const newToDoList = toDoList.filter(toDo => toDo.task != clickTask)
        setToDoList(newToDoList)
    }

 return (
   <div className="App">
    <Header />
        <ToDoList toDoList={toDoList}
         handleToggle={handleToggle} 
         handleFilter={handleFilter}
         removeToDo={removeToDo}
         />
        <ToDoForm addTask={addTask}></ToDoForm>
        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

        {/* <p>{errMsg}</p> */}
        {/* <ToastContainer className="notification-container"/> */}
   </div>
 );
}

export default App;