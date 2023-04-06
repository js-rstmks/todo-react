import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter, removeToDo}) => {
    
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} 
                        key={todo.id + todo.task}
                        handleToggle={handleToggle} 
                        removeToDo={removeToDo}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
   );
};
export default ToDoList;