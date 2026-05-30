import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'


export const Register = () => {

  let navigate = useNavigate();

  const [ registerForm, setRegisterForm ] = useState({
      fullname: "",
      emailid: "",
      phone: "",
      password: "",
      confirmPassword: ""
  })

 
 const [ errorMessage, setErrMessages ] = useState(null)
  

  let handleSubmit = (e) => {
    e.preventDefault();
    let err = {}

    let checkAll = {
        isFn: false,
        isEmail: false,
        isPhone : false,
        isPassword: false,
        isCpassword: false
    }

      if(registerForm.fullname ===""){
          err.fullname_error = "Name field should not be empty"
          checkAll.isFn = false
      }
      else if(registerForm.fullname.length < 3){
          err.fullname_error = "Name min should be three letters"
          checkAll.isFn = false
      }
      else{
        err.fullname_error = ""
        checkAll.isFn = true
      }
       
      let email_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/
      
      if(registerForm.emailid === ""){
        err.emailid_error = "Email field should not be empty"
        checkAll.isEmail = false
      }
    
      else if(!email_Regex.test(registerForm.emailid)){
        err.emailid_error = "Invalid email id"
        checkAll.isEmail = false
      }
      else{
        err.emailid_error = ""
        checkAll.isEmail = true
      }

      let phone_Regex = /^[6-9]\d{9}$/

      if(registerForm.phone === ""){
        err.phone_error = "Phone field should not be empty"
        checkAll.isPhone =  false
      }
      else if(!phone_Regex.test(registerForm.phone)){
        err.phone_error = "Invalid phone number"
        checkAll.isPhone = false
      }
      else{
        err.phone_error = ""
        checkAll.isPhone = true
      }

      let password_Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/

      if(registerForm.password === ""){
        err.password_error = "Please enter your password"
        checkAll.isPassword = false
      }
      else if(!password_Regex.test(registerForm.password)){
        err.password_error = "Password first letter should be captial and use speacial character"
        checkAll.isPassword = false
      }
      else{
        err.password_error = ""
        checkAll.isPassword = true
      }
      
      if(registerForm.password !== registerForm.confirmPassword){
        err.confirmPassword_error = "Passwordand confirm password should be same"
        checkAll.isCpassword = false
      }

      else{
        err.confirmPassword_error = ""
        checkAll.isCpassword = true
      }
    
    setErrMessages(err)
    if(checkAll.isFn && checkAll.isEmail && checkAll.isPhone && checkAll.isPassword && checkAll.isCpassword){
      
      localStorage.setItem("userData", JSON.stringify(registerForm))

      const user = JSON.parse(localStorage.getItem("userData"))

      console.log(user);
      

      // localStorage.getItem("userData")
      alert("form submitted")
      navigate("/login")
    }
    
  }
 console.log("error message", errorMessage);
  return (

    <>
    <div className='register-form'  onSubmit={handleSubmit}>
      <h1>Registration</h1>
        <form action="" >
          <div className="input-group">
            <label htmlFor="">Enter Name: </label>
            <input type="text" 
                onChange={(e) => setRegisterForm({...registerForm, fullname:e.target.value})}
                placeholder='Ex.Kiruthiga'/>
            <span className='err'>{errorMessage && errorMessage.fullname_error}</span>
          </div>
          <div className="input-group">
            <label htmlFor="">Email: </label>
            <input type="text" 
                onChange={(e) => setRegisterForm({...registerForm, emailid: e.target.value})}
                placeholder='Ex.kiruthiga@gmail.com'/>
                <span className='err'>{errorMessage && errorMessage.emailid_error}</span>
          </div>
          <div className="input-group">
            <label htmlFor="">Mobile Number:</label>
            <input type="text"
                onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})} 
                placeholder='Ex.997XXXXXXX'/>
                <span className='err'>{errorMessage && errorMessage.phone_error}</span>
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="text" 
                onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                placeholder='Ex.xxxx'/>
                <span className='err'>{errorMessage && errorMessage.password_error}</span>
          </div>
          <div className="input-group">
            <label htmlFor="">Confirm Password:</label>
            <input type="text" 
                onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                placeholder='Ex.xxxx'/>
                <span className='err'>{errorMessage && errorMessage.confirmPassword_error}</span>
          </div>
          <div className="input-group">
              <button type='submit'>Submit</button>
          </div>
          <Link to="/login">Already User?</Link>
        </form>
    </div>
    </>
  )
}

export default Register
