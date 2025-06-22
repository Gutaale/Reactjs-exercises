import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import TodoItems from './TodoItems'
const TodoList = () => {
    const { state }=useContext(TodoContext)
  return (
    <ul className="list-none">
        {
            state.map(todo=>(
              <TodoItems  key={todo.id} todo={todo}/>
            )
            )
        }
    </ul>
  )
}

export default TodoList