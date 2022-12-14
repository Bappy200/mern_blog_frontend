import React from 'react'
import { Header, Layout, Post, PostCategory, Recommended } from '../../components'
import { allPosts } from '../../data'
import { headerTopImage } from '../../importImage'
import "./Home.css"

const homeHeaderInfo = {
  title: "Jubayer Vlog",
  desc: "This website that contains online personal reflections, comments, and often hyperlinks, videos, and photographs provided by the writer also",
  headerImage : headerTopImage,
}

function Home() {
  return (
    <Layout>
        <Header {...homeHeaderInfo}/>
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
                      <Recommended title="Top" type="top"/>
                  </div>  
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Home