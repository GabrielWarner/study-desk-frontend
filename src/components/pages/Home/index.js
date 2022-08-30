import React from 'react'

export default function index({handlePageChange}) {
  return (
    <div>
        <h1>INTRO TEXT</h1>
        <button onClick={() => handlePageChange('Login')}>LOGIN</button>
    </div>
    
  )
}
