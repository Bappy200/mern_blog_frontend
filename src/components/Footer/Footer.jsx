
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../importImage'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer_section'>
        <div className='container footer_container'>
            <div className="row">
                <div className='col-sm-12 col-md-8 col-lg-4'>
                    <div className='footer_info'>
                        <img src={logo} alt="logo"/>
                        <p>Living Ecosystem<br/>Decentralized Token</p>
                        <ul className='footer_socal_link d-flex'>
                            <li><a target="blank" href="https://www.facebook.com/sajjadul200"><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a target="blank" href="https://github.com/Bappy200"><FontAwesomeIcon icon={faGithub}/></a></li>
                            <li><a target="blank" href="https://www.linkedin.com/in/sajjadul-ib/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            <li><a target="blank" href="https://www.instagram.com/md_sajjadul_islam_bappy/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <div className="footer_links">
                        <h6>Pages</h6>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/">User</Link></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <div className="footer_links">
                        <h6>Learn</h6>
                        <ul>
                            <li><Link to="/">programming</Link></li>
                            <li><Link to="/">technology</Link></li>
                            <li><Link to="/">Podcast</Link></li>
                            <li><Link to="/">Network status</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <div className="footer_links">
                    <h6>Support</h6>
                    <ul>
                        <li><Link to="/">Custommer Service</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Community</Link></li>
                    </ul>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <div className="footer_links">
                        <h6>About Blog</h6>
                        <ul>
                            <li><Link to="/">Privacy policy</Link></li>
                            <li><Link to="/">About us</Link></li>
                            <li><Link to="/">Term of use</Link></li>
                            <li><Link to="/">Quick start guide</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>&copy;{new Date().getFullYear()} sajjadul islam</p>
            </div>
        </div>
    </div>
  )
}

export default Footer