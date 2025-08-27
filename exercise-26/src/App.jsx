import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'


function App() {

  return (
    <div className='app'>
      <h1>React Blog</h1>
      <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default App
