import React, { useState } from 'react'
import Comments from '../Comments/Comments';
import "./UserComments.css"

function UserComments({id}) {
  const [commentText, setCommentText] = useState('')

  const handlerSubmit = (e)=>{
    e.preventDefault();
    console.log(commentText);
  }
  return ( 
    <div className='user_comments_section'>
        <h4>Comments</h4>
        <form onSubmit={(e)=> handlerSubmit(e)}>
          <div class="form-group pt-4">
            <label for="exampleFormControlTextarea1" className='pb-2'>Give you feedback</label>
            <textarea onChange={(e)=> setCommentText(e.target.value)}  class="form-control" value={commentText} id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <input type="submit" className='submit_button' />
      </form>
      <div className='user_comments_section_feedback'>
          <h4>User Feed back</h4>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
          {/* {
            allPosts?.comments.map(comment=> <Comments key={comment.userId} props={comment}/>)
          } */}
      </div>
    </div>
  )
}

export default UserComments