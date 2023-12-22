// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import './App.css'
import Card from "./components/card";
// import Joke from "./components/joke";
import IMAGES from "./assets/images";



export default function App(){
    return(
      <div>
        {/* <Joke 
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
          upvotes = {2}
          comments = {function addTwoNumbers(){
            console.log("i am nasty.")
          }}

        />
        <Joke 
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
          upvotes = {1}
          comments = {["Good and nice experience", "Nasty"]}
        />
        <Joke 
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          upvotes = {3}
          comments = {["Good and nice experience", "Nasty"]}
        />
        <Joke 
          // setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
          upvotes = {2}
          comments = {["Good and nice experience", "Nasty"]}
        /> */}
        <Navbar />
        <Hero />
        <Card 
          img1 = {IMAGES.image3}
          img2 = {IMAGES.image4}
          rating = "5.0"
          reviewCount = {`(6)`}
          country = "USA"
          title = "Life Lessons with Katie Zaferes"
          price = {136}
        />
      </div>
    )
}