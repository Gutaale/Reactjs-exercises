import { useEffect, useState } from 'react'


function App() {
const [cordinates, setCoordinates] = useState({x:0, y:0})
const handleMouseMove = (e) => {
  setCoordinates({x: e.clientX, y: e.clientY})
}
useEffect(() => {
  window.addEventListener('mousemove', handleMouseMove)
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])
  return (
   <>
    <h1>Mouse Coordinates</h1>
    <h2>Mouse X: {cordinates.x}</h2>
    <h2>Mouse Y: {cordinates.y}</h2>
  
   </>
  )
}

export default App
