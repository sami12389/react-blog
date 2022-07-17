import React from 'react'
import './products.css'
import Product from '../Product/Product'
import About from '../About/About'
const Products = () => {
  return (
    <>
    <div className = "productsPage">
    <div className = "productsContainer">
       <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
    <div className = "aboutContainer">
      <About/>
    </div>
    </div>
    </>
   
  )
}

export default Products