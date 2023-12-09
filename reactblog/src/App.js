import React, { useState ,useEffect } from 'react'
import {CreatePost, Home, Navbar, YourPosts,FullPost} from './components/index'
import { Route, Routes, useNavigate } from 'react-router-dom'
import api from './api/postList'


const App = () => {
  const [postTitle,setPostTitle]=useState('')
  const [postDesc,setPostDesc]=useState('')
  const [postList,setPostList]=useState([])
  const [searchItem,setSearchItem]=useState('')
  const [searchItemList,setSearchItemList]=useState([])
  const navigate=useNavigate()
// adding items
  const postDetails=async(e)=>{
    e.preventDefault();
    const postDetails={id:postList.length+1,title:postTitle,desc:postDesc}
    try{const response=await api.post('/postList',postDetails)
    setPostList((prevalue)=>[...prevalue,response.data])}
    catch(err){
      console.log(`Error: ${err.message()}`)
    }
    
    setPostTitle('')
    setPostDesc('')
    navigate('/yourposts')
  }
  // deleting items
  const handleDelete=async (itemid)=>{
    try{
      await api.delete(`/postList/${itemid}`)

    }
    catch(err){
      console.log(`Error in delete: ${err.message()}`)

    }
    const datafilter=postList.filter((item)=>{
     return item.id!==itemid
    })
    setPostList(datafilter)
  }
  // searching items
  useEffect(()=>{
    const filterSearch=postList.filter((item)=>((item.title).toLowerCase()).includes(searchItem.toLowerCase())||((item.desc).toLowerCase()).includes(searchItem.toLowerCase()))
    setSearchItemList(filterSearch)

  },[searchItem,postList])
  //axios request
  useEffect(()=>{
    const fetchResults=async()=>{
      try{
        const response=await api.get('/postList')
        setPostList(response.data)

      }
      catch(err){
        console.log(`Error: ${err.message}`)

      }

    }
  fetchResults()


  },[])
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/createpost' element={<CreatePost postDesc={postDesc} 
    setPostDesc={setPostDesc} postDetails={postDetails} 
    postTitle={postTitle} setPostTitle={setPostTitle}/>}/>
      <Route path='/yourposts'>
        <Route index element={<YourPosts postList={searchItemList} handleDelete={handleDelete} searchItem={searchItem} setSearchItem={setSearchItem}/>}/>
        <Route path=':id' element={<FullPost postList={searchItemList} handleDelete={handleDelete}/>}/>
      </Route>
      </Routes>
             
    </div>
  )
}

export default App
