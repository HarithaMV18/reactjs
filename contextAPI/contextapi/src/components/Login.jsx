import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const {setUser} =useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={(e)=>handleSubmit(e)}>submit</button>
    </div>
  )
}

export default Login
