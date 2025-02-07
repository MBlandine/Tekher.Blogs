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

function Vendors() {
  

    
    return(
               <div class="vendors">
                    <div class="title"><h1>Store List</h1></div>
                    
                    <div class="images">
                        <div class="relative">
                                        <img src={img1} alt='' class="image"/>
                                        <div  class="absolute"><h3>John Doe's Store</h3>
                                                               <p>Central Park,</p>
                                                               <p>New York,</p>
                                                               <p>New York, United States (US)</p></div>
                        </div>
                        <div class="relative">
                                        <img src={img2} alt='' class="image"/>
                                        <div  class="absolute"><h3>John Doe's Store</h3>
                                                               <p>Central Park,</p>
                                                               <p>New York,</p>
                                                               <p>New York, United States (US)</p></div>
                        </div>
                        <div class="relative">
                                        <img src={img3} alt='' class="image"/>
                                        <div  class="absolute"><h3>John Doe's Store</h3>
                                                               <p>Central Park,</p>
                                                               <p>New York,</p>
                                                               <p>New York, United States (US)</p></div>
                        </div>
                        <div class="relative">
                                        <img src={img4} alt='' class="image"/>
                                        <div  class="absolute"><h3>John Doe's Store</h3>
                                                               <p>Central Park,</p>
                                                               <p>New York,</p>
                                                               <p>New York, United States (US)</p></div>
                        </div>
                        <div class="relative">
                                        <img src={img5} alt='' class="image"/>
                                        <div  class="absolute"><h3>John Doe's Store</h3>
                                                               <p>Central Park,</p>
                                                               <p>New York,</p>
                                                               <p>New York, United States (US)</p></div>
                        </div>
                        <div class="relative">
                                        <img src={img6} alt='' class="image"/>
                                        <div  class="absolute"><h3>John Doe's Store</h3>
                                                               <p>Central Park,</p>
                                                               <p>New York,</p>
                                                               <p>New York, United States (US)</p></div>
                        </div>
                 </div>
        </div>
    )
}
export default Vendors