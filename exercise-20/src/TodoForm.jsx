import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext'

const TodoForm = () => {
    const [text, setText]=useState('')
    const { dispatch } =useContext(TodoContext)

    const handleAdd =()=>{
        if(text.trim()){
            const newTodo={
                id: Date.now(),
                text:text,
                completed:false
            }

            dispatch({
                type: "add", 
                payload: newTodo
            });
            setText('')
        }
    }


  return (
    <div className='flex justify-between items-center w-2/3'>
        <input className='rounded p-2 border border-gray-600' type="text" name="" id="" value={text} onChange={(e)=>setText(e.target.value)} />
        <button className='bg-purple-600 text-lg text-white px-3 py-2 font-semibold cursor-pointer ml-2 rounded' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoForm