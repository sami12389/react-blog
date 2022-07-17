import React from 'react'
import './writepost.css'
const WritePost = () => {
  return (
    <div className = "write">
        <div className = "c">
            <i className = "fa fa-user addIcon fa-2x"></i>
            <button type = "button" className = "choosePhoto">Choose Image</button>
        </div>
        <div className = "textInputContainer">
            <input type = "text" className = "inputBar" placeholder='Blog Title'/>
            <input type = "textarea" className = "textBar" placeholder='Blog Text'/>
        </div>
    </div>
  )
}

export default WritePost