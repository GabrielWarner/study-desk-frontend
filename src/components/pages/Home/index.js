// import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import "./style.css";

export default function index({
  handlePageChange,
  user,
  setCurrentPage,
  setUser,
  setToken,
}) {
  return (
    <div className="homeContainer">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <h1 className="homeTitle">Focus</h1>
      {/* place logo? */}
      <p> 
        {/* Welcome to our application */}
        A Customerizable Study Dashboard
      </p>
      {user.id ? (
        setCurrentPage("Dashboard")
      ) : (
        <div className="homeBorder">
          <p className="welcome">
            {/* Welcome to Focus. Please login or make an
            account to proceed to the study dashboard. */}
            Ready to start focusing?<br></br>
            Login or make an account to proceed.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}
