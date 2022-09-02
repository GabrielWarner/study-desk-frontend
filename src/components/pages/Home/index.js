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
      <h1 className="homeTitle">Home Page</h1>
      <p> Welcome to our application</p>
      {user.id ? (
        setCurrentPage("Dashboard")
      ) : (
        <div className="homeBorder">
          <p className="text-dark">
            Welcome to our video chat application! Please login or make an
            account to proceed to the main lobby. Once you are in the room, you
            will need to allow video and microphone access in order to join the
            videochat. If you are using windows, turn off other video cameras
            app in order to display your video.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}
