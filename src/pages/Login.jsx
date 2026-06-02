import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

export const Login = () => {

  const [ Loginform , setLoginform ] = useState({
    emailid : "",
    password : ""
  })

  const [ errorMessage, setErrMessages ] = useState(null)

  let handleLogin = (e) => {

    e.preventDefault()

    let checkAll = {
      isEmail: false,
      isPassword: false
    }

    let err = {}

    if(Loginform.emailid === ""){
        err.emailid_error = "Email field should not be empty"
        checkAll.isEmail = false
      }
    
      else{
        err.emailid_error = ""
        checkAll.isEmail = true
      }

      if(Loginform.password === ""){
        err.password_error = "Password is required"
      }

       else{
        err. password_error = ""
        checkAll.isEmail = true
      }

      setErrMessages(err)

    const userData = JSON.parse(localStorage.getItem("userData"))

    console.log("userData",userData)
    console.log("Longinform",Loginform);
    if(
    userData.emailid === Loginform.emailid &&
    userData.password === Loginform.password
  ){
    localStorage.setItem("userData", JSON.stringify(Loginform))

    const user = localStorage.getItem("userData")
    console.log("user",user);
    
    alert("Login Success")
  }
  else{
    alert("Invalid Email or Password")
  }


  }
  return (
  
    <>
    
      <div className='register-form'>

        <div className="form-Headings">
          <h1>Login</h1>
          </div>
          <form action="" onSubmit={handleLogin}>

          <div className="input-group">
            <label htmlFor="">Email: </label>
            <div className="inputplusicon">
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <input type="text" 
                onChange={(e) => setLoginform({...Loginform, emailid: e.target.value})}
                placeholder='Ex.kiruthiga@gmail.com'/>
                <span className='err'>{errorMessage && errorMessage.emailid_error}</span>
          </div>
          </div>      

            <div className="input-group">
              <label htmlFor="">Password</label>
              <div className="inputplusicon">
              <FontAwesomeIcon icon={faLock} className='icon' />
              <input type="password" 
               onChange={(e) => setLoginform({...Loginform, password: e.target.value})}
               placeholder='Ex.xxxx'/>
              <span className='err'>{errorMessage && errorMessage.password_error}</span>
            </div>
            <div className="forgetPassword">
                <link rel="stylesheet" href="" />
            </div>
            </div>
              <div className="input-group">
              <button type='submit' className='loginBtn'>
              <FontAwesomeIcon icon={faRightToBracket}/>Sign in
              </button>
            </div>

            <div className="bottomDetails">
            <p>New User?</p>
            <Link to="/register" className='signIndetails'>Create an account</Link>
            </div>
          </form>
      </div>
      
    </>
  )
}

export default Login
