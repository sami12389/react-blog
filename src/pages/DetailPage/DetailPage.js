import React from 'react'
import DetailsLanding from '../../components/Details/DetailsLanding/DetailsLanding'
import DetailsPost from '../../components/Details/DetailsPost/DetailsPost'
import './detail.css'
const DetailPage = () => {
  return (
    <div className =  "detailsContainer">
       <DetailsLanding/>
       <div className = "postContainer">
         <div className = "postTitle">
           <DetailsPost/>
         </div>
       </div>
    </div>
  )
}

export default DetailPage