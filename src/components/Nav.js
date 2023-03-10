import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className='navBar'>
      <Link to='/'>
        <div>Home</div>
      </Link>
      <Link to='/about'>
        <div>About</div>
      </Link>
    </div>
  )
}

export default Nav
