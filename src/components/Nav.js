import React from 'react';
import '../styles/Nav.css';


function Nav() {
  return (
    <nav className = "nav">
      <h1> It Just Means More </h1>
      
      
      <ul className = "nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Nav;