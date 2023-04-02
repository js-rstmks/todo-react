import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import "./index.css"

 
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
       return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    console.log(mapped) 
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
   </div>
 );
}


 
export default App;