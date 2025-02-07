import React from "react";
import '../styles.css/Footer.css'
import {  FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import  one from "../assets/one.webp";
function Footer () {
    return (
        <div class="footer">
            <div class="left">
                <div className="lefth3"><h3>Stay up to date</h3></div>
                <div><p>Subscribe  to  our  newsletter  and  get  20%  discount  offer  in  your  first  in  your  first  order .</p></div>
                
                <form><input type="text" id="email" name="email" placeholder="Enter your email" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input>
                <p class="submit">SUBMIT </p></form>
                <div>
                        <div class="leftlower">
                        <div class="sideone">
                         <h3>SHOP</h3>
                         <li>Body Lotion</li>
                         <li>Computer Gadget</li>
                         <li>Electronics</li>
                         <li>Fashion</li>
                         <li>General</li>
                         <li>Shoes</li>
                         <li>Sports</li>
                         <li>Watch</li>
                         <li>Woman Clothes</li></div>

                          <div class="sidetwo">
                            <h3>COMPANY</h3>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Help</li>
                            <li>Contact</li>
                         </div>

                         <div class="sidethree">
                            <h3>ABOUT</h3>
                            <li>Who We Are</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                         </div>
                         </div>
                </div>
            </div>
            <div class="right">
                 <div class="righth3"><h3>Happy to help</h3></div>
                 <div>
                 <li>1279 Thorn Street, NY</li>
                 <li>Phone: 307-549-2480</li>
                 <li>Mail: demo@gmail.com</li>
                 </div>
                 
                 <div class="footericon"><IoLogoFacebook />
                 <FaXTwitter />
                 < FaLinkedin/>
                 <IoLogoInstagram />
                 </div>
                 
                 <div><h3>ACCEPT FOR</h3></div>
                 <img src={one} alt=""/>

            </div>
            
            
        </div>
    )
}

export default Footer
