import React from 'react'
import { headerTopImage } from '../../importImage'
import "./Header.css"


function Header({title, headerImage, desc}) {
  return (
    <div className="header_section">
      <img className='header_image' src={headerImage} alt="headerImage" />
      <div className="container">
          <div className='header_content'>
              <h1>{title}</h1>
              <p>{desc}</p>
          </div>
      </div>
    </div>
  )
}

export default Header