import React from 'react';


export default function TodoItem({title,completed,id,removeTodo,toggleTodo}){
    function handleRemove(){
        removeTodo(id) 
    }
    
    function handleToggle(){
        toggleTodo(id)
    }
        
    return(
        <div>
            <input type = "checkbox" checked={completed} onChange={handleToggle}/>
            {title}
            <input 
                type = "submit" 
                value = "x" 
                style ={{float:"right"}}
                onClick ={handleRemove}
            />
        </div>
    )
}
// style ={{float:"right"}}