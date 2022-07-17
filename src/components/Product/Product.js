import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import ProductImg from '../NavBar/01.jpg'
const Product = () => {
  return (
    <div className = "productContainer">
      <img src = {ProductImg} alt = "Product Image" className = "productImage"/>
       <div className = "productTop">
       <h2 className = "blogTitle">Blog Title</h2>
       <div className = "likePost">
       <p className="numberOfLikes">1.1k</p>
       <i className = "fa fa-heart fa-2x"></i>
       </div>
        </div>
       <h3 className = "blogAuthor">Blog Author</h3>
       <p className = "blogText">Lorem ipsum dolor, sit amet consectetur adipisicing 
       elit. Modi error repellendus, optio consectetur vitae similique nisi consequuntur 
       est provident quos, veniam tenetur accusamus corrupti a eaque ab quidem dolorem
        voluptates officiis! Vero enim impedit mollitia! Amet fuga recusandae voluptate consectetur!</p>
        <div className = "postBtnContainer">
        <Link to = "/detailspage">
        <button type = 'button' className = "readPostBtn">Read Post</button>  
        </Link> 
        <small className = "blogPostDate">1 hour ago</small>
        </div>
    </div>
  )
}

export default Product