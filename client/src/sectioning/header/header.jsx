import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="nav"></nav>
      <h1>This is the header</h1>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/mentor">Mentor</NavLink>
        </li>
        <li>
          <NavLink to="/mentee">Mentee</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
