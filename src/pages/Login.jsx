import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

  const [ Loginform , setLoginform ] = useState({
    emailid : "",
    password : ""
  })

  let handleLogin = (e) => {

    e.preventDefault()

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
      <div className='register-form' onSubmit={handleLogin}>
          <h1>Login</h1>
          <form action="">

            <div className="input-group">
            <label htmlFor="">Email: </label>
            <input type="text" 
                onChange={(e) => setLoginform({...Loginform, emailid: e.target.value})}
                placeholder='Ex.kiruthiga@gmail.com'
                />
            </div>
            <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="text" 
                onChange={(e) => setLoginform({...Loginform, password: e.target.value})}
                placeholder='Ex.xxxx'/>
            </div>
            <div className="input-group">
                <button type='submit'>Submit</button>
            </div>
            <Link to="/register">New User?</Link>
          </form>
      </div>
    </>
  )
}

export default Login
