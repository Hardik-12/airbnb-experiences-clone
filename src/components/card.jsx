/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Card(props){
    console.log(props)
    let badgeText = undefined
    if(props.cardData.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.cardData.location == "Online"){
        badgeText = "ONLINE"
    }
    return (
        <section className="card-section">
            {badgeText != undefined && <div className="card-badge">{badgeText}</div>}
            <img src={props.cardData.coverImg} alt="" className="card-img" />
            <div className="card-stats">
                <img className="card-star" src={props.cardData.ratingImg} alt='star-image' />
                <small className="card-rating">{props.cardData.stats.rating}</small>
                <small className='gray'>{`(${props.cardData.stats.reviewCount})`} • </small>
                <small className="gray">&nbsp;{props.cardData.location}</small>
            </div>
            <h2 className="card-title">{props.cardData.title}</h2>
            <p className="card-cost"><small className="bold">From ${props.cardData.price}</small> / person</p>
        </section>
    )
}