import React from 'react'
import { Header, Layout, Post, PostCategory, Recommended } from '../../components'
import { allPosts } from '../../data'
import { blogTopHeader } from '../../importImage'

const blogHeaderInfo = {
  title: "All Blogs",
  desc:"This website that contains online",
  headerImage: blogTopHeader,

}
function Blog() {
  return (
    <Layout>
        <Header {...blogHeaderInfo}/>
        <div className='container home_container'>
            <div className='row'>
                <div className='col-sm-12 col-md-8'>
                    <div className='home_left_side'>
                      <div className='row'>
                            {
                              allPosts.map(post => <Post key={post.id} props={post}/>)
                            }
                      </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4'>
                  <div className="home_right_side">
                      <PostCategory/>
                      <Recommended title="latest blog" type="latest"/>
                  </div>  
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Blog