import React from 'react'
import { useParams } from 'react-router-dom'
import {RiDeleteBin6Line} from 'react-icons/ri'

const FullPost = ({postList,handleDelete}) => {
  const {id}=useParams()
  const fullPostDetails=postList.filter((item)=>(item.id).toString()===id)
return fullPostDetails.length>0?fullPostDetails.map((items)=>{

return (
  
  <div key={items.id} className='relative bg-zinc-700 text-zinc-300 rounded-xl px-3 py-4 w-4/12  h-52 m-auto flex gap-5 overflow-hidden'>
       
  <div className="postInfo break-words w-3/4 mr-2 ">

   <p className='text-lg font-semibold text-zinc-800'>{items.title}</p>
   <p className='text-base'>{items.desc}</p>
   </div>
   <div className="postDeleteEdit  flex justify-end  w-1/4">

   <RiDeleteBin6Line  className='text-red-400' onClick={()=>handleDelete(items.id)}/>
   </div>
   <div className='absolute bg-blue-400 w-full bottom-0 text-center left-0 text-zinc-800 font-semibold py-2 cursor-pointer'>
   <p>Edit</p>
</div>
</div>

)}
)

:<p  className='text-zinc-200 px-4'>No posts to display</p>
}

export default FullPost
