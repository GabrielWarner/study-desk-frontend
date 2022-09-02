import React from 'react'
import './style.css';


export default function Login({handleFormSubmit, handleInputChange,user,email,password,setCurrentPage }) {
  return (
    <div>
        {user.email? setCurrentPage('Dashboard') :(

      <>
        <h2 className="text-dark">Login</h2>
        <form className="form login-form">

            <div className="form-group text-dark row justify-content-center">
            <input
            className="form-input"
            type="text" id="email-login"
            value={email}
            name="email"
            onChange={handleInputChange}
            placeholder="insert email" />
            </div>

            <div className="form-group text-dark row justify-content-center">
            <input 
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Insert Password" />
            </div>
            
            <div className="row justify-content-center mb-3">
            <button
            onClick={handleFormSubmit}
            className="btn btn-primary btn-sizing"
            type="submit">Login</button>
            </div>
            
            {/* TODO: have create account button link to create account page */}
            <div className="row justify-content-center">
            <button onClick={(e)=>{ setCurrentPage('Register')}} className="btn btn-primary btn-sizing" href="/create-account">Create Account</button>
            </div>
        </form>
        </>
        )}
    </div>
  )
}
