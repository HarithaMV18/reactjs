import React ,{useRef} from 'react'
import './yourposts.css'
import PostFeed from '../postfeed/PostFeed'

const YourPosts = ({postList,handleDelete,searchItem,setSearchItem}) => {
  const ref=useRef(null)
  return (
    <div ref={ref} className='yourposts flex flex-col py-3 w-[95%] m-auto gap-6 flex-wrap relative overflow-hidden'>
      <form className='text-right px-2' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='search posts...' value={searchItem} onChange={(e)=> setSearchItem(e.target.value)} className='px-2 py-2 w-1/4 rounded-xl text-sm'/>
      </form>
      <div className="postfeed-section flex gap-3 flex-wrap  px-5">
      <PostFeed postList={postList} handleDelete={handleDelete} refer={ref}/>
      </div>
     
    </div>
  
)}

export default YourPosts
