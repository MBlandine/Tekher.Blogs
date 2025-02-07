import React from 'react';
import "../styles.css/Blog.css"
import pic1 from '../assets/pic1.webp'
import pic2 from '../assets/pic2.webp'
import pic3 from '../assets/pic3.webp'
import pic4 from '../assets/pic4.webp'
import pic5 from '../assets/pic5.webp'
import pic6 from '../assets/pic6.webp'


export default function Blog () {
    return (
        <div class="blog">
            <div class="title"><h1>Blog</h1></div>
            <div class="pictures">
            <img src={pic1} alt='' class="picture"/>
            <img src={pic2} alt='' class="picture"/>
            <img src={pic3} alt='' class="picture"/>
            <img src={pic4} alt='' class="picture"/>
            <img src={pic5} alt='' class="picture"/>
            <img src={pic6} alt='' class="picture"/>
            </div>

        
        </div>
    )
}












