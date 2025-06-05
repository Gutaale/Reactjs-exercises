import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => {
    if(count>0)
    setCount((prev) => prev - 1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button disabled={count==0} onClick={decrement}>Decreament</button>
      <button  onClick={increment}>Increament</button>
    
    </>
  )
}

export default App
