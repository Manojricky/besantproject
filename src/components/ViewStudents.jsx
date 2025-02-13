import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewStudents = () => {

  let [studentData , setStudentData] = useState([])

  useEffect(()=>{
     let x = axios.get("http://localhost:4000/posts")
     .then(({data})=>setStudentData(data)) 
  },[])

  return (
    <div className='viewstudent s'>
      <h1 style={{textAlign:"center" , padding:"10px 20px"}}>VIEW STUDENTS</h1>
        <div className="containers">
        {studentData.map((x)=>{
            return(
           <div className='boxes'>
            <h1>Name : {x.name}</h1>
            <h1>Email : {x.email}</h1>
            <h1>Course :{x.course}</h1>
              <div style={{ width : "100%"}}>
                <button style={{borderRadius : "20px"}} >UPDATE</button>
                <button style={{borderRadius : "20px"}}>DELETE</button>
              </div>
           </div>
           
            )
        })}
        </div>
    </div>
  )
}

export default ViewStudents