import React from 'react'

export default function index() {
  return (
    <div>

    <h2 className="text-dark">Login</h2>
      <form className="form login-form">
        <div className="form-group text-dark row justify-content-center">
          <input className="form-input" type="text" id="email-login" placeholder="Insert Email" />
        </div>
        <div className="form-group text-dark row justify-content-center">
          <input className="form-input" type="password" id="password-login" placeholder="Insert Password" />
        </div>
        
        <div className="row justify-content-center mb-3">
          <button className="btn btn-primary btn-sizing" type="submit">Login</button>
        </div>
        
        <div className="row justify-content-center">
          <a className="btn btn-primary btn-sizing" href="/create-account">Create Account</a>
        </div>
      </form>

    </div>
    
  )
}
