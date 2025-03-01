import React from 'react';
import "../styles.css/Blog.css"
import pic1 from '../assets/pic1.webp'
import pic2 from '../assets/pic2.webp'
import pic3 from '../assets/pic3.webp'
import pic4 from '../assets/pic4.webp'
import pic5 from '../assets/pic5.webp'
import pic6 from '../assets/pic6.webp'
import { Link } from 'react-router-dom';


export default function Blog () {

    const posts = [
        {
         src: pic1, 
         text:"Sed magna dui, dignissim id felis vitae, consectetur"
        },
        {
         src: pic2, 
         text:"Fusce suscipit risus tempor, blandit urna at, laoreet ex"
        },
        {
         src: pic3, 
         text:"Pellentesque varius, diam vitae mattis luctus, mi mi cursus"
        },
        {
         src: pic4, 
         text:"Nam pharetra fringilla justo, et commodo lacus molestie ut"
        },
        {
         src: pic5, 
         text:"Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi"
        },
        {
         src: pic6, 
         text:"Duis lacinia convallis odio, quis efficitur dolor pulvinar nec"
        },
      ];
    
    return (
        
            // <div class="title"><h1>Blog</h1></div>
            // <div class="pictures">
            // <img src={pic1} alt='' class="picture"/>
            // <img src={pic2} alt='' class="picture"/>
            // <img src={pic3} alt='' class="picture"/>
            // <img src={pic4} alt='' class="picture"/>
            // <img src={pic5} alt='' class="picture"/>
            // <img src={pic6} alt='' class="picture"/>
            // </div>

            <div > 
     <h1 className='About'>Blog</h1>
    <div className='blog'>
    {posts.map((post,index)=>(
      <div className="blogs" key={index}>
        <img src={post.src} alt={post.text} className='blog-image' />
        <div className="blog-text"> <h6>July 18, 2021</h6> {post.text}
        <h6 className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus  adipisicing elit culpa [..]</h6>
        <Link to={'/'}> <li className='read'>Read More</li></Link>
        </div>
      </div>
    ))}
    </div>
    </div>

        
    )
}












