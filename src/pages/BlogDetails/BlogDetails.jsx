import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Header, Layout, Likes, PostCategory, Recommended, UserComments, UserLeft } from '../../components';
import "./BlogDetails.css"

function BlogDetails() {
    const {state} = useLocation();
    const {id} = useParams()
    const {name, image, desc, date, category, user, userImage, likes, comments} = state
    const firstLetterOfDesc = desc[0]
    return (
    <Layout>
        <Header title={name} headerImage={image}/>
        <div className='container home_container'>
            <div className='row'>
                <div className='col-sm-12 col-md-8'>
                    <div className='home_left_side'>
                        <div className='blog_detailes_categorys_tag'>
                            {
                                category.map(item=> <span className='blog_detailes_categorys_tag_item' key={item}>#{item}</span>)
                            }
                        </div>
                        <div className='blog_detailes_content'>
                            <h2>{name}</h2>
                            <p className='blog_detailes_content_date'>{date}</p>
                            <p className='blog_detailes_content_desc'><span className='blog_detailes_content_first_letter'>{firstLetterOfDesc}</span>{desc.substring(1)}</p>
                        </div>
                        <Likes/>
                        <UserComments id={id}/>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4'>
                  <div className="home_right_side">
                      <UserLeft />
                      <PostCategory/>
                      <Recommended title="Recommedetion for you" type={category[0]}/>
                  </div>  
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BlogDetails