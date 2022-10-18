import React from 'react'
import { Header, Layout } from '../../components'
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
        <h2>Blog</h2>
    </Layout>
  )
}

export default Blog