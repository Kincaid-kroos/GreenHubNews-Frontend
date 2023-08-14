import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './logo.png';
import './NavBar.css'


const NavBarLayout= () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (


    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img src={logo} alt='' style={{ width: '50px', height: '35px' }} />GreenHubNews
        </Link>
            <button className="navbar-toggler" 
                type="button"
                onClick={handleToggle}
                data-bs-toggle="collapse" 
                aria-expanded={isNavOpen} 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
        <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item .text-warning-emphasis">
              <NavLink className="nav-link  text-light" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/blog">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/sign up">
                <button className='rounded-circle'>
                Sign Up!
                </button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/blog">
                <button className='rounded-circle'>
                Login
                </button></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLayout