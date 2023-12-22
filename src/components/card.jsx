/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";




export default function Card(props){
    return (
        <section className="card-section">
            <img src={props.img1} alt="" className="card-img" />
            <div className="card-stats">
                <img className="card-star" src={props.img2} alt='star-image' />
                <small className="card-rating">{props.rating}</small>
                <small className='gray'>{(props.reviewCount)} • </small>
                <small className="gray">&nbsp;{props.country}</small>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-cost"><small className="bold">From ${props.price}</small> / person</p>
        </section>
    )
}