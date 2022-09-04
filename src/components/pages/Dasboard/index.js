import React, { useEffect,useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Pomodoro from "../../Pomodoro";
import GoogleSearch from "../../GoogleSearch";
import Inspirational from "../../Inspirational";
import Weather from "../../Weather";
import Notes from "../../Notes";
import Calendar from "../../Calendar";

import "./style.css";

export default function Dashboard({ setUser, setToken,setTimerToggle }) {

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    fetch("http://localhost:3001/api/users/check-token", {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    }).then((res) => {
      if (!res.ok) {
        console.log("invalid token");
        localStorage.removeItem("token");
      } else {
        console.log("valid token");
        res.json().then((data) => {
          setToken(storedToken);
          setUser({
            id: data._id,
            email: data.email,
            username: data.username,
          });
        });
      }
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="grid-container">
        <div className="lofiBackground"></div>
      <div id="timer" className="timer">
          <Pomodoro />
      </div>

        <div id="side" className="side">
          <Weather />
        </div>
        <div id="search" className="search-bar">
          <GoogleSearch />
        </div>
        <div id="quote" className="quote-widget">
          <Inspirational />
        </div>
        <div id="main" className="notes-main">
          <Notes />
        </div>
      </div>
    </div>
  );
}
