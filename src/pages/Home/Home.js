import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import Landing from '../../components/Landing/Landing'
import Products from '../../components/Products/Products'
import './home.css'
const Home = () => {
  return (
    <div className  = "homeContainer">
      <Landing/>
      <Products/>
    </div>
  )
}

export default Home