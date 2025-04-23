import React from 'react'
import './App.css'
const UserCard = ({name, email}) => {
    const newStyle={
        textAlign: "center", 
        width: "500px", 
        backgroundColor:"blue", 
        color:"white", 
        fontSize:"1.2rem", 
        padding:"10px", 
        margin:"10px",
        borderRadius:"10px",
    }
  return (
    <div className='card'>
        <h1 className="h1">User name is: {name}</h1>
        <p style={
                newStyle
            }>User Email is: {email} </p>
        </div>
  )
}

export default UserCard