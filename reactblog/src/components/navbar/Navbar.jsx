import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full px-10 py-7 text-zinc-200'>
        <ul className='flex items-center justify-end gap-9'>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/createpost'><li>Create Post</li></NavLink>
            <NavLink to='/yourposts'><li>Your Posts</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar
