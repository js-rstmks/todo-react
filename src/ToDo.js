import React from 'react';
 
const ToDo = ({todo, handleToggle, removeToDo}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    
    return (
        <div style={{display: 'flex'}}>
            <div id="{todo.id}" className={todo.complete ? "todo strike" : "todo"} onClick={() => handleToggle(todo.id)}>
                <span>{todo.task}</span>
                <span style={{marginLeft: '10px'}}>{todo.category === "business" ? "business" : "academy"}</span>
            </div>
            <button onClick={removeToDo}>☓</button>
        </div>
    );
 };
 
export default ToDo;