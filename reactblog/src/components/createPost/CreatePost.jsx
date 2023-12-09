import React from 'react'
import './createpost.css'

const CreatePost = ({postTitle,setPostTitle,postDesc,setPostDesc,postDetails}) => {
  return (
    <div className='createpost w-[40%] m-auto absolute top-[50%] left-[50%] -translate-x-[50%] 
    -translate-y-[50%] px-10'>
    <form className='flex flex-col gap-1' onSubmit={(e)=>postDetails(e)}>
    <label htmlFor="title" className='text-zinc-200'>Title:</label>
    <input id='title' required maxLength={20} type="text" placeholder='title...' className='rounded px-5 py-2 border-none' value={postTitle} onChange={(e)=>{setPostTitle(e.target.value)}}/>
    <label htmlFor="blog" className='text-zinc-200'>Blog</label>
    <textarea name="blog" required id="blog" cols="30" rows="10" className='rounded px-5 py-2' placeholder='write your blog...' value={postDesc} onChange={(e)=>{setPostDesc(e.target.value)}}></textarea>
    <button type='submit' className='bg-content-btn w-fit px-4 py-1 rounded text-center mx-auto my-3'>Submit</button>
   </form>
    </div>
   
  )
}

export default CreatePost
