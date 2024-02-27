import React from 'react'
import './loginsignup.css'

function Login() {
  return (
    <div className="container">
      <div className="login form">
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email"/>
          <input type="password" placeholder="Enter your password"/>
          <input type="button" className="button" value="Login"/>
      </form>
      <div className="signup">
        <span className="signup">Don't have an account?
         <a href='#'>Signup</a>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Login;