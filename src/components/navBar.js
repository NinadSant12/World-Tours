import React, {Component} from 'react';
import logo from './../logo.png';
import navBar from '../components/navBar.scss'

export default function NavBar(){

    return(
<nav className='navbar'>
       <img src={logo} alt="city tours logo"/>
       <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            City Tours
          </a>
        </li>
       </ul>
  
  
      </nav>
    );
}





