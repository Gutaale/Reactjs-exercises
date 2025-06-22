import { useState } from 'react'
import TodoApp from './TodoApp'
function App() {
  return (
      
    <div className='w-full h-screen bg-gradient-to-br from-purple-100 to-blue-100
     flex justify-center items-center '>
      <div className='max-w-2/3 mx-auto bg-white h-96 p-8 shadow-lg rounded-2xl'>
        <h1 className='text-2xl font-semibold text-gray-700 text-center mb-3 p-2'>My Todo List</h1>
        <TodoApp />
      </div>
    </div>
  )
}

export default App
