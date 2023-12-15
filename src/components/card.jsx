// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "../assets/images";




export default function Card(){
    return (
        <section className="card-section">
            <img src={IMAGES.image3} alt="" className="card-img" />
            <div className="card-stats">
                <img className="card-star" src={IMAGES.image4} alt='star-image' />
                <small className="card-rating">5.0</small>
                <small className='gray'>(6) • </small>
                <small className="gray">&nbsp;USA</small>
            </div>
            <h2 className="card-title">Life Lessons with Katie Zaferes</h2>
            <p className="card-cost"><small className="bold">From $136</small> / person</p>
        </section>
    )
}