import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
  return (
    <div>
      <h2>Profile:{user.userName?user.userName:""}</h2>
    </div>
  )
}

export default Profile
