import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
        <nav style={{"position": "sticky"}}>
            <div className="logo"><a href="/"  style={{"textDecoration": "none", "color": "white"}}> Diljot S </a></div>
            <input type="checkbox" id="click"/>
            <label htmlFor="click" className="menu-btn">
            <i >=</i>
            
            </label>
            <ul>
              <li><a className="active" href="/">Home</a></li>
              <li><a href="/" style={{"pointerEvents": "none"}}>About</a></li>
              <li><a href="/" style={{"pointerEvents": "none"}}>Services</a></li>
              <li><a href="/" style={{"pointerEvents": "none"}}>Gallery</a></li> 
              <li><a href="/" style={{"pointerEvents": "none"}}>Feedback</a></li>
            </ul>
        </nav> 
    </>
  )
}

export default Navbar;
