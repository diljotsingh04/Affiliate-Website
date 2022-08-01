import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
        <nav style={{"position": "fixed"}}>
            <div className="logo"><a href="/"  style={{"textDecoration": "none", "color": "white"}}> Diljot S </a></div>
            <input type="checkbox" id="click"/>
            <label htmlFor="click" className="menu-btn">
            <i >=</i>
            
            </label>
            <ul>
              <li><a className="active" href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Gallery</a></li> 
              <li><a href="/">Feedback</a></li>
            </ul>
        </nav> 
    </>
  )
}

export default Navbar;
