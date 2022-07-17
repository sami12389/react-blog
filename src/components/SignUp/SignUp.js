import React from 'react'
import './signup.css'
const SignUp = () => {
  return (
    <div className = "signup">
        <form className = "formContainer">
          <input type = "text" className = "formInput" placeholder='User Name'/>
          <input type = "text" className = "formInput" placeholder='Email'/>
          <input type = "text" className = "formInput" placeholder='Password'/>
                    <input type = "text" className = "formInput" placeholder='Verify Password'/>
          <button type = "submit" className = "btnSubmit">SignUp</button>
          <a href = "">Already have an account.</a>
        </form>
    </div>
  )
}

export default SignUp