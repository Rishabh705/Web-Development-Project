import React, { useContext, useState } from 'react'
import '../styles/header.css'
import { NavLink,Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import { BsFillCaretDownFill } from 'react-icons/bs'
import MUISwitch from './MUISwitch'
import ThemeContext from '../contexts/ThemeContext'

const sx = {
  mr:0
}
export default function Header() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className="navbar">

      <div className="heading-cont">
        <h1 className="name"><Link to="/" end="true" style={{ 'color': theme ? '#DD3B50' : '#57BDDD' }}>Cloud Builder</Link></h1>
      </div>
      {/* Menu Button */}
      <Hamburger />
      <nav className='navbar-nav' id='navbar-nav'>
        <ul className="navlist-1" id='navlist-1'>
          <li>
            <MUISwitch />
          </li>
          <li>
            <NavLink to='/about' style={{color:theme ? '#fff' : '#000'}}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' style={{color:theme ? '#fff' : '#000'}}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu-bg" id="menu-bg"></div>

    </div>
  )
}