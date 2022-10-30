import React from 'react'
import { Layout, Post, UserLeft } from '../../components'
import { allPosts } from '../../data'
import "./UserProfile.css"
function UserProfile() {
  return (
    <Layout>
        <div className='user_profile_section'>
        <div className='container home_container'>
            <div className='row'>
                <div className='col-sm-12 col-md-8'>
                    <div className='home_left_side'>
                        <h2 className='user_profile_section_user_name'>@User Name</h2>
                        <h5 className='user_profile_section_title'>All Blogs</h5>
                      <div className='row'>
                            {
                              allPosts.map(post => <Post key={post.id} props={post}/>)
                            }
                      </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4'>
                  <div className="home_right_side">
                      <UserLeft/>                      
                  </div>  
                </div>
            </div>
        </div> 
        </div>
    </Layout>
  )
}

export default UserProfile