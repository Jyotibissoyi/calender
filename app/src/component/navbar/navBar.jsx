import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

      <nav className='main_nav'>
        <div className="logo">
          <h1>Calender</h1>
        </div>
        <div className='menu_nav'>
          <ul>
            <li className='li_nav'> <NavLink className="a_nav" to="/">Home</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/Events">EVENTS</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/Search">Details</NavLink></li>
          </ul>
        </div>
      </nav>

    </div>
  )
}



export default Navbar