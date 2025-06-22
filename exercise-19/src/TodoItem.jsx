import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import TodoItemStyles from './TodoItems.module.css'

const TodoItem = ({todo}) => {
    const {dispatch}=useContext(TodoContext)
    const handleDelete =(id)=>{
        dispatch({ 
            type: 'delete',
            payload:id 
        })
    }
    const handleToggle=(id)=>{
        dispatch({
            type:'toggle',
            payload:id
        })

    }

  return (
     <li key={todo.id} className={TodoItemStyles.listItems} style={{background: todo.completed && "#dbdcdd" }}>
        <div className={TodoItemStyles.content}>
        <input type="checkbox" checked={todo.completed}/>
        <span className={TodoItemStyles.text} style={{textDecoration: todo.completed? "line-through" : "none"}} onClick={()=>handleToggle(todo.id)}>{todo.text}</span>
        </div>
        <button className={TodoItemStyles.btnDelete} style={{display: todo.completed && "flex"}} onClick={()=>handleDelete(todo.id)}>delete</button>
    </li>
  )
}

export default TodoItem