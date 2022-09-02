import React, { useState, useEffect } from "react";
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
      <h1 className="homeTitle">Title Name</h1>
      <p> Welcome to our application</p>
      {user.id ? (
        setCurrentPage("Dashboard")
      ) : (
        <div className="homeBorder">
          <p className="welcome">
            Welcome to Title Name "STILL THINKING" Please login or make an
            account to proceed to the dashboard.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}
