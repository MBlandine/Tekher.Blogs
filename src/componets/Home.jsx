import React from 'react'
import "../styles.css/Home.css"
import image1 from '../assets/photo1.webp'
import image2 from '../assets/photo2.webp'
import image3 from '../assets/photo3.webp'
import image4 from '../assets/photo4.webp'
import image5 from '../assets/photo5.webp'
import image6 from '../assets/photo6.webp'
import image7 from '../assets/photo7.webp'
import image8 from '../assets/photo8.webp'
import image9 from '../assets/photo9.webp'

function Home () {


  return (
    <div className='container'>
      <div className='containers'>
        <div className="side">
          <li className='list'>Electronics</li>
          <li className='list'>Computer Gadget</li>
          <li className='list'>Fashion</li>
          <li className='list'>Body Lotion</li>
          <li className='list'>Sports</li>
          <li className='list'>Woman Clothes</li>
          <li className='list'>Shoes</li>
          <li className='list'>Watches</li>
        </div>
        <div className="center">
          <h2>Explore our latest and <br/> greatest electronics</h2> 
          <button className="button">SHOP NOW</button>
        </div>
        </div>
     
   
      <div className="popular">
        <h3>Popular Categories</h3>
        <div className='imagee'>
        <img src= {image1} alt='' className='image'/>
        <img src= {image2} alt='' className='image'/>
        <img src= {image3} alt='' className='image'/>
        <img src= {image4} alt='' className='image'/>
        <img src= {image5} alt='' className='image'/>
        <img src= {image6} alt='' className='image'/>
        </div>
      
             <li>Sport</li>
             <li>Computer Gadget</li>
             <li>Electronics</li>
             <li>Watch</li>
             <li>Woman Clothes</li>
             
      
        
        
      </div>
      <div className="newarrivals">
        <h3>New Arrival Products</h3>
       
      </div>
      
       
      
      </div>
    )
}
export default Home