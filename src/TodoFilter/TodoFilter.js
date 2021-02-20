import React from 'react'
import TodoFilterItem from './TodoFilterItem'

export default function TodoFilter (props) {

    return (
        <div>
            <TodoFilterItem {...props} name="all" /> / 
            <TodoFilterItem {...props} name="active" />/ 
            <TodoFilterItem {...props} name="completed" />
        </div>
    )
}