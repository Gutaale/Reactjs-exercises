import React, { useReducer } from 'react'
import TodoContext from './TodoContext'
import { initialStates, reducer} from './reducer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
const TodoApp = () => {
    // useContext(TodoContext)
    const [ state, dispatch ]=useReducer(reducer, initialStates)
  return (
    <TodoContext.Provider value={{state, dispatch}}>
        <TodoForm />
        <TodoList />
    </TodoContext.Provider>
  )
}

export default TodoApp