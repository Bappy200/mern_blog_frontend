import React from 'react'
import "./Header.css"


function Header({title, headerImage, desc}) {
  return (
    <div className="header_section">
      <img className='header_image' src={headerImage} alt="headerImage" />
      <div className="container">
          <div className='header_content'>
              <h1>{title}</h1>
              {desc&& <p>{desc}</p>}
          </div>
      </div>
    </div>
  )
}

export default Header