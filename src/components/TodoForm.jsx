import React from "react";
import { useState } from "react";

const TodoForm = function({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder='Input todo'/>
            <button>Save</button>
        </form>
    )
}

export default TodoForm;