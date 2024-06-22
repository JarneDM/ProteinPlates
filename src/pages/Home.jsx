import React from 'react'
import NavBar from './NavBar'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="content">
        <img className='big-logo' src="src\assets\PP-logo.png" alt="logo" />
        <div className='options'>
          <Link>
            <button className='button bulk-btn'>Bulk</button>
          </Link>
          <Link>
            <button className='button snacks-btn'>Snacks</button>
          </Link>
          <Link>
            <button className='button cut-btn'>Cut</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Home
