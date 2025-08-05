import './App.css'
import { Link, NavLink, Outlet } from 'react-router'
function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='flex justify-around p-2 items-center bg-white'>
        <div>
          <NavLink to="/" className={`font-bold text-2xl text-red-600`}>Recipe Book</NavLink>
        </div>
        <div className='flex space-x-4 '>
            <NavLink to='/'
            className={({isActive})=>(isActive ? "font-bold text-lg text-red-600": "text-lg font-semibold")}
            >Home</NavLink>
            <NavLink to='recipes'
            className={({isActive})=>(isActive ? "font-bold text-lg text-red-600": "text-lg font-semibold")}
            >Recipes</NavLink>
            <NavLink to='categories' 
            className={({isActive})=>(isActive ? "font-bold text-lg text-red-600": "text-lg font-semibold")}
            >Categories</NavLink>
        </div>
      </header>
      <main className='max-w-4xl mx-auto p-6'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
