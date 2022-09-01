import React, { useState, useEffect } from 'react'

export default function index({handlePageChange,user,setCurrentPage,setUser,setToken}) {
  
  return (
    <div>
        <h1>Home Page</h1>
        <p> Welcome to our application</p>
        {user.id? setCurrentPage('Dashboard'):(<h1>hi</h1>)}
    </div>
    
  )
}
