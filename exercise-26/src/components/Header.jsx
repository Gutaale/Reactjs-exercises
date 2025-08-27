import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router'
import { AuthContext } from '../AuthContext';

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header>
         
        <nav>
          <NavLink to="/" end>Home</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/create">Create Post</NavLink>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
    </header>
  )
}

export default Header