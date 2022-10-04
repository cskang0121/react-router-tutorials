import React from 'react'

import { NavLink } from 'react-router-dom'

// import './index.css'

export default function NavBar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      color : isActive ? 'blue' : 'grey',
      fontWeight : isActive ? 'bold' : 'normal'
    }
  }

  return (

    // Primary Navigation Bar
    <nav>
      <NavLink to='/' style={navLinkStyles} end>
        Home
      </NavLink>
      <NavLink to='/about' style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to='/product' style={navLinkStyles}>
        Product
      </NavLink>
    </nav>
  )
}
