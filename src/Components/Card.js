/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

import React from "react"

// import star from "../Images/star.png"
// import katie from "../Images/katie-zaferes.png"



function Card(props){
    return(<div className = "Card"> 
        {props.openSpots === 0 && <div className= "card--badge">SOLD OUT</div>}
        <img src = {require(`../Images/${props.img}`)} className = "Card--image"/>
        <div className = "Card-stats">
            <img src = {props.image} width = "20px" />
            <span>{props.rating}</span>
            <span className = "gray">({props.reviewCount})</span>
            <span className = "gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className = "bold">
            From ${props.price}/</span> person</p>
        
        
    </div>)
}

export default Card