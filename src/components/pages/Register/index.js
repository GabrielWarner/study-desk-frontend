import React from 'react'

export default function index({handleFormCreate, handleInputChange,user, username,email,password,setCurrentPage }) {
  return (
<div>
        {user.id? setCurrentPage('Dashboard') :(
          
      <>
        <h2 className="text-dark">Create Account</h2>
        <form className="form login-form">

            <div className="form-group text-dark row justify-content-center">
            <input
            className="form-input"
            type="text" id="userName-login"
            value={username}
            name="username"
            onChange={handleInputChange}
            placeholder="insert user name" />
            </div>

            <div className='form-group text-dark row justify-content-center'>
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
            onClick={handleFormCreate}
            className="btn btn-primary btn-sizing"
            type="submit">Create</button>
            </div>
            

        </form>
        </>
        )}
    </div>
  )
}
