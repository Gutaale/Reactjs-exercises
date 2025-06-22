import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext'
import todoFormStayles from './TodoForm.module.css'
const TodoForm = () => {
    const [text, setText]=useState('')
    const { dispatch } = useContext(TodoContext)

    const handleAdd =()=>{
        if(text.trim()){
            const newTodo={
                id:Date.now(),
                text,
                completed:false
            }
            dispatch({
                type: 'add',
                payload: newTodo
            });
            setText('')
        }
    }

    
  return (
    <div className={todoFormStayles.todoForm}>
        <input className={todoFormStayles.todoInput} type="text" name="" id="" placeholder='Enter new To do'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button className={todoFormStayles.btn} onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoForm