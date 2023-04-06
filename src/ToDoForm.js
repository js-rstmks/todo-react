import React, {useState} from "react";

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('')

    const [ category, setCategory ] = useState("academic")

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput, category)
        setUserInput("")   
    }

    const categoryChange = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task.." />
            <input type="radio" name="category" 
                value="academic" onChange={categoryChange} checked={category === "academic"} />
                <label>Academic</label>
            <input type="radio" name="category" value="business" checked={category === "business"} onChange={categoryChange}/>Business
                <label>Business</label>
            <button>submit</button>
        </form>
    )
}

export default ToDoForm