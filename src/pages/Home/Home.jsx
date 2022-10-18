import React from 'react'
import { Header, Layout } from '../../components'
import { headerTopImage } from '../../importImage'

const homeHeaderInfo = {
  title: "Jubayer Blog",
  desc: "This website that contains online personal reflections, comments, and often hyperlinks, videos, and photographs provided by the writer also",
  headerImage : headerTopImage,
}
function Home() {
  return (
    <Layout>
        <Header {...homeHeaderInfo}/>
        <div>Home</div>
    </Layout>
  )
}

export default Home