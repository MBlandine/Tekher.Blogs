import React from "react";
import Footer from './Footer'
import Navbar from "./Navbar";
import '../styles.css/layout.css';
import {Outlet} from 'react-router-dom';
 function Layout (){
    return(
        <div>
         <Navbar/>
         <Outlet/>
         <Footer/>
        </div>
    )
 }
 export  default Layout