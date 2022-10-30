import { faHeadSideCough } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../importImage'
import "./NavBar.css"            


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar_custom">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link nav_link_custom"  aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav_link_custom" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav_link_custom" to="/create/blog">Create Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav_link_custom" to="/">Learn</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav_link_custom" to="/">Community</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle nav_link_custom" to="/" data-bs-toggle="dropdown">      
              <FontAwesomeIcon icon={faHeadSideCough}/> 
            </Link>    
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Bangladesh</Link></li>
              <li><Link className="dropdown-item" to="/">UK</Link></li>
            
              <li><Link className="dropdown-item" to="/">USA</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}

export default NavBar