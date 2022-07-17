import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className = "login">
        <form className = "formContainer">
          <input type = "text" className = "formInput" placeholder='Name'/>
          <input type = "text" className = "formInput" placeholder='Email'/>
          <input type = "text" className = "formInput" placeholder='Password'/>
          <button type = "submit" className = "btnSubmit">Login</button>
          <a href = "">Forgot Password?</a>
        </form>
    </div>
  )
}

export default Login