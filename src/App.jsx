import React from 'react'
import './App.css'
// import  { Register }  from './pages/Register'
// import  { Login }  from './pages/Login'
// import { Route, Routes } from 'react-router-dom'
import Demodash from './Demodash'

const App = () => {
  return (
    <>
    <div className='container'>
       {/* <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          
       </Routes> */}
       <Demodash/>
    </div>
    </>
  )
}

export default App
