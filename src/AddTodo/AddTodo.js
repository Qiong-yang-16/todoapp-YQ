import React from 'react';
import { useState } from 'react';

export default function AddTodo(addTodo){
    
    const [ input, setInput ] = useState('')
    function handleInput (e) {
        setInput(e.target.value)
    }

    function handleAdd () {
        if (input) {
            addTodo(input)
            setInput('')
        }
    }
    return(
        <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
            <input 
                type='text' 
                placeholder = "enter something..." 
                value={input}
                onChange={handleInput}
            />
            <input type='submit'
                   value="add"
                   disabled = {!input}
            />
        </form>
    )
}