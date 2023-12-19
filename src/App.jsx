// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import './App.css'
import Card from "./components/card";
import Joke from "./components/joke";



export default function App(){
    return(
      <div>
        <Joke 
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
        />
        <Joke 
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Joke 
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
        />
        <Joke 
          // setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
        />
      </div>
    )
}