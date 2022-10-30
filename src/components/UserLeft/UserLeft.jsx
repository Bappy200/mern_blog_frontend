import React, { useContext, useState } from 'react'
import { UserContextApi } from '../../UserContext'
import "./UserLeft.css"

function UserLeft() {
    const user = useContext(UserContextApi);
    const [follow, setFollow] = useState(true);
  return (
    <div className='user_left_side'>
        <div className='user_left_side_image'>
            <img src={user.image} alt="" />
        </div>
        <div className='user_left_side_body'>
            <h5>{user.name}</h5>
            <p className='user_left_side_body_follow'>{user.follow} Followers</p>
            <p className='user_left_side_body_about'>{user.about}</p>
            <button className='user_left_side_body_button' onClick={()=> setFollow((prev)=> !prev)}>{follow ? "follow" : "unfollow"}</button>
        </div>
    </div>
  )
}

export default UserLeft