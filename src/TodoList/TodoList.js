import React from 'react';
import TodoItem from './TodoItem';
import {useContext} from 'react'

export default function TodoList(props){
    // const items = useContext(StateContext)
    
    const items = [
        {id:1, title:'prepare react hooks demos', completed:true},
        {id:2, title:'migrate existing system', completed:false},
    ]
    return(
        <div>
            {items.map(item =>
                <TodoItem {...item} {...this.props} key={item.id}/>
                )
            }
        </div>
    )
}