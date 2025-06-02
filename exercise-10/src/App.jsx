import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'

function App() {
const users=[
  { id: 1, name: 'John Doe', email: 'john@gmail.com'},
  { id: 2, name: 'Jane Doe', email: 'jane@gmail.com'},
]
 return (
    <>
      <UserList users={users}/>
    </>
  )
}

export default App
