import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function Layout({children}) {
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout