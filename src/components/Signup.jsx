import React from 'react'

const Signup = () => {
  return (
    <div>
         <div className="container">
        <form action="">
            <h2>Sign up</h2>

            <div className="label-item">
                <label htmlFor="username">Username</label>
            </div>
            <div className="input-item">
                <input className="items" type="text" id="username" placeholder="Enter username" required/>
            </div>


            <div className="label-item">
                <label htmlFor="first">First Name</label>
            </div>
            <div className="input-item">
                <input className="items" type="text" id="first" placeholder="Enter First Name" required/>
            </div>


            <div className="label-item">
                <label htmlFor="last">Last Name</label>
            </div>
            <div className="input-item">
                <input className="items" type="text" id="last" placeholder="Enter Last Name" required/>
            </div>


            <div className="label-item">
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-item">
                <input className="items" type="email" id="email" placeholder="Enter email" required/>
            </div>


            <div className="label-item">
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-item">
                <input className="items" type="password" id="password" placeholder="Enter  password" required/>
            </div>


            {/* <div className="checkbox">
                <div className="checkbox-item ">
                    <input className="check" type="checkbox"/>
                    <label htmlFor="">I agree to the terms & conditions</label>
                </div>
            </div> */}


            <div className="button">
                <button>Register</button>
            </div>


            {/* <div className="login">
                <label className="lables" htmlFor="">Already an user</label>
                <a className="anchor" href="login.html">Login</a>
            </div> */}


        </form>
    </div>
    </div>
  )
}

export default Signup