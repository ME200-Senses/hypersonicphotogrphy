import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpeg'
import './myWork.css'

const myWorks = () => {
    return (
        <div className='my-works' id='my-works'>
            <div className='container'>
                <h2>My Works</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>I was very sceptical while hiring HyperSonic Photography for my wedding photoshoot but, after the shoot I was surprised and amazed by Vaibhav's Work. Vaibhav Kumar is true professional who does his work really well. Thanks Singh!</p>
                        <p><span>Manish Singh</span></p>
                        <p>Bekapur, Munger, Bihar</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user2'/>
                        <p>Whenever I go through the photographs of my graduation ceremony I feel like experiencing it again. All the photographs are captured really well and the emotions can be felt throught the pics, a very whole heartdly thanks to Mr. Vaibhav Kumar.</p>
                        <p><span>Nilu Kumari</span></p>
                        <p>Patna, Bihar, India</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>A very professional Photography company, that is true to their word in terms of capturing every moment and every emotions. Vaibhav has demonstrated a high amount of integrity in the time I have known him, and he is very unique in terms of style that he uses to capture images.</p>
                        <p><span>Harsh Raj Kumar</span></p>
                        <p>BiharSharif, Bihar, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default myWorks