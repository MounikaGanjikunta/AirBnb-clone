import React from "react"
import Photogrid from "../Images/Photo-grid.png"

function Photo(){
    return(
       <section className = "Photo">
           <img src = {Photogrid} className = "Photo--image" />
           <h1 className = "Photo--header">Online Experiences</h1>
           <p className = "Photo--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
       </section>
    )
}

export default Photo