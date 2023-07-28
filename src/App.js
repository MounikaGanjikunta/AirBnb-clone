import React from "react"
import Navbar from "./Components/navbar"
import Photo from "./Components/Photo"
import Card from "./Components/Card"
import star from "./Images/star.png"
import data from "./data.js"







function App(){

    const cards = data.map(function(item){
        return <Card
        img = {item.coverImg}
        image = {star}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
        
        />
    })
    
    return(
    <div>
    
    <Navbar/>
    <Photo/>
   
    <section className="cards-list">
                {cards}
    </section>
  

    </div>)
}

export default App

