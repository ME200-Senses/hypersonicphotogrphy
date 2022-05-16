import React from 'react'
import './Gallery.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
// import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.jpg'
import img14 from './images/img14.jpg'
import img19 from './images/img19.jpg'
import img16 from './images/img16.jpg'
import img17 from './images/img17.jpg'
import img18 from './images/img18.jpg'

const Gallery = () => {
    let data = [
        {
            id: 1, imgSrc:img1,
        },
        {
            id: 2, imgSrc:img2 ,
        },
        
        {
            id: 4, imgSrc:img4 ,
        },
        {
            id: 5, imgSrc:img5,
        },
        {
            id: 6, imgSrc:img6,
        },
        {
            id: 7, imgSrc:img7,
        },
        {
            id: 8, imgSrc:img8,
        },
        {
            id: 9, imgSrc:img9,
        },
        
        {
            id: 11, imgSrc:img11,
        },
        {
            id: 12, imgSrc:img12,
        },
        {
            id: 13, imgSrc:img13,
        },
        {
            id: 14, imgSrc:img14,
        },
        {
            id: 16, imgSrc:img16,
        },
        {
            id: 17, imgSrc:img17,
        },
        {
            id: 18, imgSrc:img18,
        },
        {
            id: 19, imgSrc:img19,
        }
    ]
    return (
        <div className='ga' id='gallery'>
<           h2>Gallery</h2>
            <span className='line'></span>
        <div className='gallery'>
            
            {data.map((item,index) => {
                return (
                    <div className='pics' key={index}>
                        <img src={item.imgSrc}/>
                    </div>
                )
            }

            )}
        </div>    
        </div>
    )
}

export default Gallery