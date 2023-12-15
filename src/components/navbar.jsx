// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "../assets/images";



export default function Navbar(){
    return(
        <nav className='navbar-section'>
            <img className='airbnb-icon' src={IMAGES.image1} alt='airbnb-image' />
        </nav>
    )
}