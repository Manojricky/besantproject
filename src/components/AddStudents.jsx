import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddStudents = () => {

    let navigate = useNavigate()

    let [name , setName] = useState("")
    let [email , setEmail ] = useState("")
    let [course, setCourse] = useState("")
    let [photo , setPhoto ] = useState("")

    let handleSubmit=(e)=>{
        e.preventDefault();
        let payload = {
            name , 
            email , 
            course
        }
       axios.post("http://localhost:4000/posts" , payload);
       toast.success(`User ${name} Added !`) ; 
       navigate("/viewstudents")
        
    }

  return (
    <div>
      <div className="container">
        <form action="">
            <h2>Add Student</h2>

            <div className="label-item">
                <label htmlFor="username">Student Name</label>
            </div>
            <div className="input-item">
                <input onChange={(e)=>{
                    setName(e.target.value)
                }} className="items" type="text" id="username" placeholder="Enter Studentname" required/>
            </div>


            <div className="label-item">
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-item">
                <input onChange={(e)=>{
                    setEmail( e.target.value)
                }} className="items" type="email" id="email" placeholder="Enter email" required/>
            </div>

            <div className="label-item">
                <label htmlFor="course">Course</label>
            </div>
            <div className="input-item">
                <input onChange={(e)=>{
                    setCourse(e.target.value)
                }} className="items" type="course" id="course" placeholder="Enter Course" required/>
            </div>

            <div className="label-item">
                <label htmlFor="email">Photo</label>
            </div>
            <div className="input-item">
                <input className="items" type="file" id="email" placeholder="" required/>
            </div>



            <div className="button">
                <button style={{marginRight:"5px"}} onClick={handleSubmit}>Add Student</button>
              

            </div>



        </form>
    </div>
    </div>
  )
}

export default AddStudents