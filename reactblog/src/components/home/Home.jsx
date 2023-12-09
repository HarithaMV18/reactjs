import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className="home  text-center absolute top-[50%] left-[50%] -translate-x-[50%] 
    -translate-y-[50%]  w-[80%] px-10">
    <h1 className='text-7xl font-bold text-zinc-200 mb-6 '>Write your own Blog</h1>
   <Link to='/createpost'><button className='bg-content-btn px-4 py-2 rounded text-zinc-700 font-bold'>Create Post</button></Link> 
    </div>
  )
}

export default Home
