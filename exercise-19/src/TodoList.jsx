import React, {useContext} from 'react'
import TodoContext from './TodoContext'
import TodoItem from './TodoItem'
import TodoListStyles from './TodoList.module.css'

const TodoList = () => {
    const {state}=useContext(TodoContext)
  return (
    
        <ul className={TodoListStyles.todoList}>
            {
                state.map(todo=>(
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </ul>
    
  )
}

export default TodoList