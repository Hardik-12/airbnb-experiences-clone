// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import cardArray from './data';
import './App.css'


export default function App(){
    const newCardArray = cardArray.map((cardData) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <Card 
          // img = {cardData.coverImg}
          // rating = {cardData.stats.rating}
          // reviewCount = {cardData.stats.reviewCount}
          // title = {cardData.title}
          // price = {cardData.price}
          // location = {cardData.location}
          // ratingImg = {cardData.ratingImg}
          // openSpots = {cardData.openSpots}
          cardData = {cardData}
        />
      )
    })

    
    return(
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {newCardArray}
        </section>
      </div>
    )
}