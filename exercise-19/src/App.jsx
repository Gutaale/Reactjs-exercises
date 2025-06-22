import { useState } from 'react'
import styles from './App.module.css'
import TodoApp from './TodoApp'

function App() {

  return (
    <div className={styles.container}>

      <TodoApp />
    </div>
  )
}

export default App
