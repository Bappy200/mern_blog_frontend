import React from 'react'
import { Link } from 'react-router-dom'
import { postCategory } from '../../data'
import "./PostCategory.css"

function PostCategory() {
  return (
    <div className='post_category_content'>
        {
            postCategory.map(item =><Link className='post_category_item' to="/blogs">
                    <h6>{item.name}</h6>
                    <h6>{item.count}</h6>
                </Link>
            )
        }
    </div>
  )
}

export default PostCategory