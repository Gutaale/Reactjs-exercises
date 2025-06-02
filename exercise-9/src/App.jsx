import {  useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState(null);
  const [username, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!username) {
          return;
        }
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 10000)); // Simulate a delay
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
      fetchUser();
  }, [username]);

  const handleSearch = async() => {
   if(!inputValue) {
      return;
    }
    setUserName(inputValue);
  }
  return (
    <>
      <h1>Github Users</h1>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />
      <button onClick={ handleSearch }>Search</button> 
      {loading && <p>Loading...</p>} 
      {users && (
        <div className="avatar">
          <h2>{users.name}</h2>
          <img src={users.avatar_url} alt={users.name} />
          <p>Location: {users.location || 'Not available'}</p>
          <p>Public Repos: {users.public_repos || 'Not available'}</p>
          <a href={users.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </>
  )
}

export default App
