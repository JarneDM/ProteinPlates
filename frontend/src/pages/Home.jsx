import React from 'react'
import NavBar from './NavBar'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="content">
        <img className='big-logo' src="frontend/src/assets/PP-logo.png" alt="logo" />
        
        <div className='options'>
          <Link to={"/pages/Bulk"}>
            <button className='button bulk-btn'>Bulk</button>
          </Link>
        
          <Link to={"/pages/Snacks"}>
            <button className='button snacks-btn'>Snacks</button>
          </Link>
        
          <Link to={"/pages/Cut"}>
            <button className='button cut-btn'>Cut</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
