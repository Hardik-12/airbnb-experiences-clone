// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import './App.css'
import Card from "./components/card";



export default function App(){
    return(
      <div>
        <Navbar />
        {/* <Hero /> */}
        <Card />
      </div>
    )
}