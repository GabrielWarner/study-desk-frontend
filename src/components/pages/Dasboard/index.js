import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Pomodoro from "../../Pomodoro";
import GoogleSearch from "../../GoogleSearch";
import Inspirational from "../../Inspirational";
import Weather from "../../Weather";
import Notes from "../../Notes";
import Calendar from "../../Calendar";
import Modal from "react-bootstrap/Modal";
import "./style.css";

export default function Dashboard({ setUser, setToken, setTimerToggle }) {
  const [show, setShow] = useState(false);

  const [timer, setTimer] = useState(true);
  const [search, setSearch] = useState(true);
  const [side, setSide] = useState(true);
  const [notes, setNotes] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <div id="quote" className="quote-widget">
          <button className="homeButton gadgetSetting" onClick={handleShow}>
            GADGET SETTINGS
          </button>
          <Modal className="modalBorder" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTitle">Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                onClick={() => {
                  setTimer(!timer);
                }}
                id="timer"
                type="checkbox"
              ></input>
              <label for="timer"> Pomodoro</label>
              <br />

              <input
                onClick={() => {
                  setSearch(!search);
                }}
                id="search"
                type="checkbox"
              ></input>
              <label for="search"> Search</label>
              <br />

              <input
                onClick={() => {
                  setSide(!side);
                }}
                id="side"
                type="checkbox"
              ></input>
              <label for="side"> Side</label>
              <br />

              <input
                onClick={() => {
                  setNotes(!notes);
                }}
                id="notes"
                type="checkbox"
              ></input>
              <label for="notes"> Notes</label>
              <br />
            </Modal.Body>
            <Modal.Footer>
              <button className="homeButton" onClick={handleClose}>
                Close
              </button>
              <button className="homeButton" onClick={handleClose}>
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
          <Inspirational />
        </div>

        {timer ? (
          <div id="timer" className="timer">
            {/* <div className="textOpacity"> */}
            <Pomodoro />
            {/* </div> */}
          </div>
        ) : (
          <div id="timer" className="hideTimer">
          <Pomodoro />
        </div>
        )
        }

        {search ? (
          <div id="search" className="search-bar">
            <GoogleSearch />
          </div>
        ) : (
          <div id="search" className="hideSearchBar">
          <GoogleSearch />
        </div>
        )}

        {side ? (
          <div id="side" className="side">
            <Weather />
          </div>
        ) : (
          <div id="side" className="hideSide">
          <Weather />
        </div>
        )}

        {notes ? (
          <div id="main" className="notes-main">
            <Notes />
          </div>
        ) : (
          <div id="main" className="hideNote">
          <Notes />
        </div>
        )}
      </div>
    </div>
  );
}
