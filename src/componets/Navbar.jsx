import React, { useState}from "react";

import '../styles.css/Navbar.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Registration  from '../componets/Registration';





function Navbar (){

   const [model, setModel1] = useState(false);

   const [form,setForm] = useState(0);


   
const handleRegister = () => {
   setModel1(1); // Show registration modal
 };

 const closeRegister = () => {
   setModel1(0); // Hide registration modal
 };

   const handleForm = () =>
   {
      setForm(!form);
   }
   return (


      
        <div>
            
            <div class="navupper">
               {form && <Login handleForm = {handleForm}/> }
            <h2>Botiga</h2>   
               
            <select id="fruits" name="fruits">
               <option value="All Categories">All Categories</option>
               <option value="banana">Banana</option>
               <option value="grape">Grape</option>
               <option value="orange">Orange</option>
            </select>
            
 
           
            <div class="search">  
            <input  className="input"type="text" placeholder="Search Products...." />
            <IoMdSearch className="search-icon"/>
            </div>


        

            <div className="icons">
            <FiUser className="icon" onClick={handleRegister} />
            
            </div>


        


        </div>
                <div class="navlower">
                <select id="fruits" name="fruits">
               <option value="Trending Categories">Trending Categories</option>
               <option value="banana">Banana</option>
               <option value="grape">Grape</option>
               <option value="orange">Orange</option>
               </select>
               <div class="navmenu">
               <Link to= "/Home"><li>Home</li></Link> 
                <Link to= "/Shop"><li> Shop</li></Link>
                <Link to="/Vendors"><li>Vendors</li></Link>
                <Link to="/Blog"><li>Blog</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
                 
                </div>
                
                <div class="call"><FaPhoneAlt />
                800-123-4567</div>
                </div>
           
               
                {model === 1 && <Registration closeRegister={closeRegister} />}

        </div>

        
   ) 
}
export default Navbar