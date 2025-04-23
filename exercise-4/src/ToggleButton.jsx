import React, { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true)

  return (
    <div>
        <h1>The button is {isOn? "ON": "OFF"}</h1>
        <button onClick={()=>setIsOn(!isOn)} 
        style={
            {
              padding:"10px", 
              border:"none", 
              borderRadius:"5px", 
              background:"skyblue", 
              color:'white',
              fontWeight:"bold", 
              cursor:"pointer",
              fontSize:"1.2rem"
              }
            }
            >Turn {isOn? "OFF": "ON"}</button>
    </div>
  )
}

export default ToggleButton