import { useState } from 'react'
import CounterUsingReducer from './CounterUsingReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterUsingReducer />
  )
}

export default App
