import React from 'react'
import "../styles.css/Home.css"
import image1 from '../assets/photo1.webp'
import image2 from '../assets/photo2.webp'
import image3 from '../assets/photo3.webp'
import image4 from '../assets/photo4.webp'
import image5 from '../assets/photo5.webp'
import image6 from '../assets/photo6.webp'
import image7 from '../assets/image7.webp'
import image8 from '../assets/image8.webp'
import image9 from '../assets/image9.webp'
import dress1 from '../assets/dress1.webp'
import dress2 from '../assets/dress2.webp'
import dress3 from '../assets/dress3.webp'
import dress4 from '../assets/dress4.webp'
import dress5 from '../assets/dress5.webp'
import dress6 from '../assets/dress6.webp'


import photo7 from '../assets/photo7.webp'
import photo8 from '../assets/photo8.webp'
import photo9 from '../assets/photo9.webp'
import { GoHeart } from "react-icons/go";


const Home =()=>{
  const products = [
    {
      id: 1,
      name:'All In One Bottle',
      price:'$22.00-$55.00',
      rating: 3,
      colors: ["#6B705C", "#B08968", "#EDEDED"],
      image: photo7,
    },
    {
      id: 2,
      name: "Amazon Alexa",
      price: "$49.00 – $69.00",
      rating: 5,
      colors: ["#EDEDED", "#000000"],
      image: photo8,

    },
    {
      id: 3,
      name: "Headset Gamer Legion",
      price: "$22.00 – $55.00",
      rating: 4,
      colors: ["#6B705C", "#B08968", "#EDEDED"],
      image: photo9,
    },
  ];

  const items = [
    {
      id: 1,
      name:'All In One Bottle',
      price:'$22.00-$55.00',
      rating: 3,
      colors: ["#6B705C", "#B08968", "#EDEDED"],
      image: photo7,
    },
    {
      id: 2,
      name: "Amazon Alexa",
      price: "$49.00 – $69.00",
      rating: 5,
      colors: ["#EDEDED", "#000000"],
      image: photo8,

    },
    {
      id: 3,
      name: "Headset Gamer Legion",
      price: "$22.00 – $55.00",
      rating: 4,
      colors: ["#6B705C", "#B08968", "#EDEDED"],
      image: photo9,
    },
  ];

  
  const orders = [
    {
      id: 1,
      name:'All In One Bottle',
      price:'$22.00-$55.00',
      rating: 3,
      colors: ["#6B705C", "#B08968", "#EDEDED"],
      image: image7,
    },
    {
      id: 2,
      name: "Amazon Alexa",
      price: "$49.00 – $69.00",
      rating: 5,
      colors: ["#EDEDED", "#000000"],
      image: image8,

    },
    {
      id: 3,
      name: "Headset Gamer Legion",
      price: "$22.00 – $55.00",
      rating: 4,
      colors: ["#6B705C", "#B08968", "#EDEDED"],
      image: image9,
    },
  ];

  

  return (
    <div className='container'>
      <div className='containers'>
        <div className="side">
          <li >Electronics</li>
          <li >Computer Gadget</li>
          <li >Fashion</li>
          <li >Body Lotion</li>
          <li >Sports</li>
          <li >Woman Clothes</li>
          <li>Shoes</li>
          <li >Watches</li>
        </div>
        <div className="center">
          <h3>Explore our latest and <br/> greatest electronics</h3> 
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
      
      <div className='sport'>
             <li>Sport</li>
             <li>Computer Gadget</li>
             <li>Electronics</li>
             <li>Watch</li>
             <li>Woman Clothes</li>
      </div>
             
      </div>
      <div className="newarrivals">
        <h3>New Arrival Products</h3>
        <div className="newcards">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="card-images">
                <img src={product.image} alt={product.name} />
                <div className="overlay">
                  <div className="heart"><GoHeart className='icon'/></div>
                  <div className="select-option">Select Option</div>
                  <div className="quick-view">Quick View</div>
                </div>
              </div>
              <div className="card-details">
                <h4>{product.name}</h4>
                <p className="price">{product.price}</p>
                <div className="stars">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
              </div>
          ))}
        </div>
        <div className="shopnow"> <button>SHOP NOW</button></div>




        <div className="explore">
        <h3>Explore Our Products</h3>
        <div className="newcards">
          {items.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="card-images">
                <img src={product.image} alt={product.name} />
                <div className="overlay">
                  <div className="heart"><GoHeart className='icon'/></div>
                  <div className="select-option">Select Option</div>
                  <div className="quick-view">Quick View</div>
                </div>
              </div>
              <div className="card-details">
                <h4>{product.name}</h4>
                <p className="price">{product.price}</p>
                <div className="stars">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
              </div>
          ))}
        </div>
        <div className="newcards">
          {orders.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="card-images">
                <img src={product.image} alt={product.name} />
                <div className="overlay">
                  <div className="heart"><GoHeart className='icon'/></div>
                  <div className="select-option">Select Option</div>
                  <div className="quick-view">Quick View</div>
                </div>
              </div>
              <div className="card-details">
                <h4>{product.name}</h4>
                <p className="price">{product.price}</p>
                <div className="stars">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
              </div>
          ))}
        </div>
        <div className="viewallproducts"> <button>VIEW ALL PRODUCTS</button></div>
        </div>
       
      
        <div className='instagram'>
        <h3>Follow Us On Instagram</h3>
        <div className='imagee'>
          
           <img src={dress1} alt='' className='image'/>
           <img src={dress2} alt='' className='image'/>
           <img src= {dress3} alt='' className='image'/>
           <img src= {dress4} alt='' className='image'/>
           <img src= {dress5} alt='' className='image'/>
           <img src= {dress6} alt='' class='image'/>
          
           

        </div>
        </div>
    </div>
      
    </div>
    )
}
export default Home