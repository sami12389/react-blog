import React from 'react'
import AboutImg from '../NavBar/01.jpg'
import './about.css'
const About = () => {
  return (
      <div className = "about">
    <div className = "infoContainer">
        <h2 className = "aboutTitle">About Me</h2>
        <img src = {AboutImg} alt = "About Profile" className = "aboutImage"/>
        <p className = "aboutText">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Aliquam, necessitatibus enim minus non quisquam obcaecati aut atque quos sit aperiam
          adipisci sapiente odit excepturi est voluptates neque, quaerat deleniti? Deleniti.</p>
    </div>
    <div className = "categoriesContainer">
        <h2 className = "categoriesHeader">Categories</h2>
        <ul className = "categoriesContainer">
            <li className = "categories">Life</li>
            <li className = "categories">Music</li>
            <li className = "categories">Meditation</li>
            <li className = "categories">Cooking</li>
            <li className = "categories">Life</li>
            <li className = "categories">Music</li>
            <li className = "categories">Meditation</li>
            <li className = "categories">Cooking</li>
        </ul>
    </div>
    </div>
  )
}

export default About