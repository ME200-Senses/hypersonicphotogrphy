import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub

} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#my-works'>My Works</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#gallery'>Gallery</a>
                    </li>
                </ul>
                <span className='line'></span>
                <div className='contact'>
                    <h2> Follow Me Here</h2>
                                        
                    <a href="https://www.instagram.com/me_hypersonic/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    
                    <a href="https://www.facebook.com/HyperSonic03/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>

                    <a href="https://www.linkedin.com/in/vaibhav-kumar-305995201/"
                        className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="http://github.com/ME200-Senses/"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>

                    <a href="https://www.twitter.com/IMHyperSonic/" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>

                    <a href="https://www.youtube.com/channel/UCrTFZbj_zeoCbLdxvDyZTuw/"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                </div>
                <div className='bottom'>
                    <p>2022 Photography, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer