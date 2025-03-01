import React from 'react'
import '../styles.css/Vendors.css'
import { MdOutlineFilterList } from "react-icons/md";
import { CgLayoutGrid } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'
import simg1 from '../assets/simg1.webp'
import simg2 from '../assets/simg2.webp'
import simg3 from '../assets/simg3.webp'
import simg4 from '../assets/simg4.webp'
import simg5 from '../assets/simg5.webp'
import simg6 from '../assets/simg6.png'

import { TfiMenuAlt } from "react-icons/tfi";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosArrowDroprightCircle } from "react-icons/io";


function Vendors() {
  
    const stores = [
        {
          name: "John Doe's Store",
          src: img1,
          profile:simg1,
          rating: 5,
          location: "Central Park, New York, United States (US)",
        },
        {
          name: "Jessica's Store",
          src: img2,
          profile:simg2,
          rating: 4,
          location: "Central Park,New York, United States(US)",
        },
        {
            name: "Santa Monica's Store",
            src: img3,
            profile:simg3,
            rating: 4.5,
            location: "Central Park,New York, United States(US)",
          },
          {
            name: "Digital Good's Store",
            src: img4,
            profile:simg4,
            rating: 4.5,
            location: "Central Park,New York, United States(US)",
          },
          {
            name: "The Glass Store",
            src: img5,
            profile:simg5,
            location: "Central Park,New York, United States(US)",
          },
          {
            name: "John Doe's Store",
            src: img6,
            profile: simg6,
            rating: 5,
            location: "Central Park,New York, United States(US)",
          }
        ];
      
      
    

    
    return(
               <div class="vendors">
                    <div class="title"><h1>Store List</h1></div>

                       <div className="top-bar">
                            <span>Total stores showing: 6</span>
                            <div  className="sort-dropdown">
                            <span>Filter</span>
                            <span>Sorted by:</span>
                            <select >
                              <option>Default sorting</option>
                              <option>Sort by popularity</option>
                              <option>Sort by average rating</option>
                              <option>Sort by Latest</option>
                              <option>Price: Low to High</option>
                              <option>Price: High to Low</option>
                            </select>
                            </div>
                            <div className="icons">
                                <TfiMenuAlt />
                                <PiDotsNineBold />
                            </div>
                            </div>
                

                 <div className="store">
        {stores.map((store, index) => (
          <div className="stores" key={index}>
            <div className="store-overlay">
              <h3 className='title'>{store.name}</h3>
              <div className="stars">{"⭐".repeat(store.rating)}</div>
              <p>{store.location}</p>
            </div>
            <img src={store.src} alt="" className="store-image" />
            <div className="profile-circle">
              <img src={store.profile} alt="Owner" />
            </div>
            <IoIosArrowDroprightCircle className='arrow' />
          </div>
        ))}
      </div>

    </div>

        
    )
}
export default Vendors