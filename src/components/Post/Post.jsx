import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Post.css"
import { useNavigate } from "react-router-dom";

function Post({props}) {
    const {name, date, category, likes, comments, user, userImage, image , id} = props
    const navigate = useNavigate();

    const handlerClick = ()=>{
        navigate(`/blog/${id}`,{ state: {...props} })
    }

    return (
   <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
        <div onClick={()=> handlerClick()} className='post_content'>
            <div className='post_content_image'>
                <img src={image} alt="postImage" />
                <span>{category[0]}</span>
            </div>
            <div className='post_content_body'>
                <div className='post_content_writer'>
                    <div className='post_content_writer_img'>
                        <img src={userImage} alt="userImage" />
                    </div>
                    <div className='post_content_writer_info'>
                        <p className='post_content_writer_info_user_name'>{user}</p>
                        <p className='post_content_writer_info_date'>{date}</p>
                    </div>
                </div>
                <h4 className='post_content_body_name'>{name}</h4>
                <div className='links_comments'>
                    <div className='post_content_body_liks'>
                        <FontAwesomeIcon icon={faHeart}/>
                        <span>{likes}</span>
                    </div>
                    <div className='post_content_body_comments'>
                        <FontAwesomeIcon icon={faComment}/>
                        <span>{comments.length}</span>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Post