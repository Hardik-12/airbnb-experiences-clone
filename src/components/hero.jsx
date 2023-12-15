// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "../assets/images";


export default function Hero(){
    return(
        <section className="hero-section">
            <img className="hero-img" src={IMAGES.image2} alt='hero-image' />
            <div className="hero-experiences">
                <h1 className="hero-experiences-header">Online Experiences</h1>
                <small className="hero-experiences-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</small>
            </div>
        </section>
    )
}