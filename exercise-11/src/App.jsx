import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUserName] = useState('');
  const [password , setPassword] = useState('');
  const [logedIn, setLoggedIn] = useState(false);

const handleClick = () => {
  if (username !== '' && password !== '') {
    setLoggedIn(true);
  }
}

const handleSignOut = () => {
  setLoggedIn(false);
  setUserName('');
  setPassword('');
}
  return (
    <>
    
    {
      logedIn?(
        <div>
          <h2>Welcome, {username}</h2>
          <button onClick={handleSignOut} className='logout'>Logout</button>
      </div>
      ):(
        <div>
          <h1>Login</h1>
          <input type="text" placeholder='Enter user name' value={username} onChange={(e)=>setUserName(e.target.value)}  required/>
          <input type="password" placeholder='Enter user name' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <button onClick={handleClick} className='login'>Login</button>
        </div>    
      )
    }
    </>
  )
}

export default App
