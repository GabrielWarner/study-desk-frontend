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
      <h1 className="homeTitle">Title Name</h1>
      <p> Welcome to our application</p>
      {user.id ? (
        setCurrentPage("Dashboard")
      ) : (
        <div className="homeBorder">
          <p>
            Welcome to our Study Dashboard! Please login or make an account to
            proceed to the dashboard.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}
