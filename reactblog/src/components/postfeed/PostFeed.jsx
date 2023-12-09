import React from 'react'
import './postfeed.css'
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line  } from "react-icons/ri";
import { motion } from "framer-motion"

const PostFeed = ({postList,handleDelete,refer}) => {
    return postList.length>0? postList.map((items)=>{
        
        return(
            
            <motion.div  whileHover={{scale:1.1}} key={items.id} className='relative bg-zinc-700 text-zinc-300 rounded-xl px-3 py-4 w-60  h-52 mr-2 flex gap-5 overflow-hidden'>
         
           <div className="postInfo break-words w-3/4 mr-2 ">
           <Link to={`${items.id}`}>
            <p className='text-lg font-semibold text-zinc-800'>{items.title}</p>
            <p className='text-base'>{(items.desc).length>30?(items.desc).slice(0,30)+'...':items.desc}</p>
            </Link>
            </div>
            
            <div className="postDeleteEdit  flex justify-end  w-1/4">
            {/* <RiEditLine  className='text-blue-400'/> */}
            <RiDeleteBin6Line  className='text-red-400' onClick={()=>handleDelete(items.id)}/>
            </div>
            <div className='absolute bg-blue-400 w-full bottom-0 text-center left-0 text-zinc-800 font-semibold py-2 cursor-pointer'>
            <p>Edit</p>
        </div>
        </motion.div>
            
       )
      }):<p className='text-zinc-200'>No posts to display</p>
}

export default PostFeed
