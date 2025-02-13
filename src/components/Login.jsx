import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="container">
        <form action="">
            <h2>Login</h2>
            <div className="label-item">
                <label htmlFor="username">Username</label>
            </div>
            <div className="input-item">
                <input className="items" type="text" id="username" placeholder="Enter username" required/>
            </div>
            <div className="label-item">
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-item">
                <input className="items" type="password" id="password" placeholder="Enter Password"  required/>
            </div>
            <div className="checkbox">
                {/* <div className="chekbox-input">
                    <input className="check" type="checkbox" id="checkbox"/>

                    <label htmlFor="checkbox">Remember me</label>
                </div>
                <div className="anchor">
                    <a href="">htmlForgot Password?</a>
                </div> */}
               
            </div>

            <div className="button">
                <button>Login</button>
            </div>
            <div className="register">
                <label htmlFor="">Don't have an account?</label>
                <a href="reg.html">Sign up</a>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login