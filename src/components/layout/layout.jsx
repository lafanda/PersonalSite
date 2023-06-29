import React from "react";
import Navbar from './navbar'
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import './layoutStyles.css'

function Layout(){
    return(
        <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    );
} 
export default Layout;