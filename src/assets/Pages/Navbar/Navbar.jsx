import React from 'react'
import logo from '/images/logo.png'
import { NavLink } from 'react-router'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      
<div className='navbar-section'>

<header>
<div class="nav-container">
<div class="logo-section"> <img src={logo} class="navlogo" /> </div>

<nav class="nav-links" >
<NavLink className="btn" to="/">Home</NavLink>
<NavLink className="btn" to="#">Know Your Universe </NavLink>
<NavLink className="btn" to="/blogs">Blogs </NavLink>
<NavLink className="btn" to="#"> About Us </NavLink>
</nav>
</div>
</header>


</div>




    </div>
  )
}

export default Navbar
