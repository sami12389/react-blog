import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './01.jpg'
import './navbar.css'
const Home = () => {
  return (
    <div className = "navContainer">
      <div className = "navIconContainer">
       <h2 className = "navHeader">5 Minute Code</h2>
      </div>
      <ul className = "navListContainer">
        <Link to = './'>
        <li className = "list">Home</li>
        </Link>
         <Link to = './write'>
        <li className = "list">Write</li>
        </Link>
         <Link to = './signup'>
         <li className = "list">SignUp</li>
        </Link>
         <Link to = './signin'>
        <li className = "list">SignIn</li>
        </Link>
         <Link to = './setting'>
         <li className = "list">Admin</li>
        </Link>
      </ul>
      <div className = "searchBarContainer">
        <i className = "fa fa-search fa-2x"></i>
         <Link to = './setting'>
         <img src = {Profile} alt = "profile photo" className = "profilePhoto"/>
        </Link>
      </div>
    </div>
  )
}

export default Home