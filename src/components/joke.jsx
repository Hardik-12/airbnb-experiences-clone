/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";



export default function Joke(props){
    
    return (
        <div>
            {props.setup && <h1 className="setup">Setup: {props.setup}</h1>}
            {props.punchline && <p className="punchline">Punchline: {props.punchline}</p>}
            <hr />
        </div>
    )
}