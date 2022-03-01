import React, { useState, useEffect } from 'react';
import logo from './logo.png'
import "./Nav.css";
import { Outlet, NavLink, Link } from "react-router-dom";


export const Nav = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('current-user'))) {
      setLogout(true);
      setCurrentUser(() => JSON.parse(localStorage.getItem('current-user'))['name']);
    } else {
      setLogout(false);
    }
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('current-user');
    setLogout(false);
  }
  return (
    <div>
       <header class="header">
        <NavLink to='/' class="logo"> <img className='logo-img' src={logo} /> </NavLink>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><NavLink to='/' className="header-link" > Home </NavLink></li>
            <li><NavLink to='/categories' className="header-link" > Categories </NavLink></li>
            <li><NavLink to='/about' className="header-link"> About </NavLink></li>
            {/* <li><NavLink to='/single' className="header-link"> Single </NavLink></li> */}
            <li>
            {(JSON.parse(localStorage.getItem('current-user')) ? <NavLink to='/contact' className="header-link"> Contact </NavLink> : <Link to='/login'>Contact</Link>)}
              </li>
            { !logout &&
              <><li><NavLink to='/login'> Login </NavLink></li>
            <li><NavLink to='/registration'> Register </NavLink></li></>
            }
            {logout && <>
            <li><NavLink to ='/userprofile'>{currentUser}</NavLink></li>
            <li onClick={handleLogout}><NavLink to ='/'>logout</NavLink></li>
            </>}
        </ul>
      </header>
      <Outlet />
    </div>
  )
}
