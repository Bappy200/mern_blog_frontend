import React from 'react'
import { blog1 } from '../../importImage'
import "./Comments.css"
function Comments({props}) {
     
  return (
    <div className='comments_content'>
        <div className='comments_user_image'>
            <img src={blog1} alt="userImage" />
            
        </div>
        <div className='comments_content_body'>
        <span className='comments_content_username'>{props?.user} bappy</span>
            <p className='comments_content_body_text'>{props?.text} Thank for this article..</p>
            <span className='comments_content_body_date'>12 jun 2022</span>
        </div>
    </div>
  )
}

export default Comments