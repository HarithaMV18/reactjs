import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme} from "./context/theme"

const Navbar = () => {
   const mode=useTheme()
   console.log(mode)
   
  return (
    <nav className='nav-bar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='toggle-section'>
        <label htmlFor="toggle" className='switch'>
        <input type="checkbox" id="toggle" onChange={mode.switchToggle} checked={mode.toggle==="dark"}/>
        <span className='slider'></span>
        </label>
      
      
      </div>
      
    </nav>
  )
}

export default Navbar
