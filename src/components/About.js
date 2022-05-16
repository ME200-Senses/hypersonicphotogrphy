import React from 'react'
import vaibhav from './images/vaibhav.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={vaibhav} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>HyperSonic Photography is an Indian Photgraphy company with office in Munger, Bihar, India. Working with open mindset and thinking out of the box gives me the ability to capture image from a very unique and natural way. Most of my works incude pics from place where I live, but more is about to come.</p>
                    <p>I am Vaibhav Kumar, Developer, Photgrapher, Melomaniac and nature lover. Contact me to capture your most loving memories.</p>
                    <button className='button'>Explore Me !</button>
                </div>
            </div>
        </div>
    )
}

export default About