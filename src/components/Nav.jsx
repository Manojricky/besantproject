import React from 'react'
import LOGO from "./logo.png"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
        <div className='logoblock'>
            <img src={LOGO} alt="" />
        </div>
        <div className='menublock'>
            <ol>
                <li>
                  <Link to={"/viewstudents"}>VIEW STUDENTS</Link>
                </li>
                <li>
                  <Link to={"/addstudents"}>ADD STUDENTS</Link>
                </li>
                <li>
                  <Link to={"/login"}>LOGIN</Link>
                </li>
                <li>
                  <Link to={"/signup"}>SIGN UP</Link>
                </li>
            </ol>
        </div>
    </nav>
  )
}

export default Nav