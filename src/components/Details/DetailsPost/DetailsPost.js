import React from 'react'
import './detailspost.css'
import About from '../../About/About'
const DetailsPost = () => {
  return (
    <div className = 'detailContainer'>
    <div className = "detailsPost">
        <h2 className = "title">Blog Title</h2>
        <p className = "blogText">lorem lorem lorem lore lorem lorem lorem loren loren lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
    </div>
    <div className = "aboutContainer">
        <About/>
    </div>
    </div>
  )
}

export default DetailsPost