import React, {useReducer} from 'react'
import TodoContext from './TodoContext'
import {initialStates, reducer} from './reducer'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoAppStyle from './TodoApp.module.css'
const TodoApp = () => {
const [state, dispatch]=useReducer(reducer, initialStates)

  return (
    <TodoContext.Provider value={{state, dispatch}}>
        <h1 className={TodoAppStyle.header}>My Todo List</h1>
        <TodoForm />
        <TodoList />
    </TodoContext.Provider>
  )
}

export default TodoApp