import React, { useContext } from 'react'
import TodoContext from './TodoContext'

const TodoItems = ({todo}) => {
    const { dispatch }=useContext(TodoContext)
  return (
        <li className='mb-2 bg-gray-100 p-3 mt-3 rounded shadow flex justify-between items-center
        hover:bg-gray-200'>
            <div className='flex justify-center items-center gap-1'>
            <input type="checkbox" checked={todo.completed} onChange={()=>dispatch({
                type: "toggle", payload: todo.id
            })}/>
            <span style={{textDecoration: todo.completed && "line-through"}} 
            onClick={()=>dispatch({type:"toggle", payload: todo.id})}
            >{todo.text}</span>
            </div>
            {
                todo.completed && (
                    <button className="bg-red-300 text-white px-3 py-1 rounded-2xl cursor-pointer " onClick={()=>dispatch({
                        type:"delete", payload: todo.id
                    })}
                    >delete</button>
                )
            }
            
            
        </li>
  )
}

export default TodoItems