import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter';
// import StateContext from './data/StateContext';
import {fetchAPITodos, generateID}from './api/tasks.js';
import appReducer from './reducer/appReducer';


export default function App(){

  const [state,setState] = useState([])
  // const [toggle, settoggle] = useState(todos)

  function addTodo(title){
    const{todos} = state
    const newTodo = {id: generateID(), title, completed: false}
    setState({todos: [newTodo, ...todos]})
  }
 
  // function toggleTodo(id){
  //   const {todos} = state
  //   const newTodos = todos.map(t=>
  //     {
  //       if (t.id===id){
  //         return {...t, completed:!t.completed}
  //       }
  //       return t
  //     },[]
  //   )
  //   setState({todos:newTodos})
  // }

  // const [state,dispatch] = useReducer(appReducer,{todos:[],filter:'all'})
  return(
    <React.StrictMode>
    <div style={{ margin: '0 300px 60px 300px' }}>
      <Header/>
      <AddTodo addTodo={addTodo}/>
      <hr/>
      <TodoList/>
      <hr/>
      <TodoFilter/>
    </div>
    </React.StrictMode>
  )
  
}


// ReactDOM.render(
//   ,
//   document.getElementById('root')
// );

//用函数的方式无法渲染？？？
// export default function todo(){
// return(
  
// )
// }

