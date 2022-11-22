import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      { /* logo */}
      <div className='navbar__logo'>
        <h2>MERN Shopping Cart</h2>
      </div>
      { /* links */}
      <ul className='navbar__links'>
        <li>
          <Link to="/cart">


          </Link>
        </li>
      </ul>
      { /* hamburger menu */}

    </div>
  )
}

export default Navbar