import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/PP-logo-S.png'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li id="logo">
          <Link to={"/"}>
            <img src={logo} height="15px" alt="sentence logo" />
          </Link>
        </li>
        <li>
          <Link to={"/pages/about"}>About</Link>
        </li>
        <li>
          <Link to={"/pages/bulk"}>Bulk</Link>
        </li>
        <li>
          <Link to={"/pages/snacks"}>Snacks</Link>
        </li>
        <li>
          <Link to={"/pages/cut"}>Cut</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
