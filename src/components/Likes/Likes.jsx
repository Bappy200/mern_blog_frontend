import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./Likes.css"

function Likes() {
    const [likes, setLikes] = useState(20);

  return (
    <div className='likes_section'>
        <div className='likes_content' onClick={()=> setLikes((prev)=> prev + 1)}>
            <FontAwesomeIcon icon={faHeart}/>
            <span className='likes_content_count'>{likes}</span>
        </div>
        
    </div>
  )
}

export default Likes