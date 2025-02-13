import React, { useEffect, useState } from 'react'
import "./global.css"
import Nav from './components/Nav'
import ViewStudents from "./components/ViewStudents"
import AddStudents from "./components/AddStudents"
 import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'


const App = () => {

  return (
    <div>
        <Router>
          <ToastContainer/>
          <Nav/>
          <Routes>
              <Route path='/viewstudents' element={<ViewStudents/>}/>
              <Route path='/addstudents' element={<AddStudents/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App