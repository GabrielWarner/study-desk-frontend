import React, { useEffect, useState } from "react";
// import { Grid, GridItem } from "@chakra-ui/react";
import Pomodoro from "../../Pomodoro";
import GoogleSearch from "../../GoogleSearch";
import Inspirational from "../../Inspirational";
import Weather from "../../Weather";
import Notes from "../../Notes";
import Calculator from "../../Calculator";
import Modal from "react-bootstrap/Modal";

import calenderpic from "../../../img/Calender.JPG";

import AncientWindAudio from "../audio/Ancient-Wind.mp3";
import DeepInTheOceanAudio from "../audio/Deep-In-The-Ocean.mp3";
import ForestAudio from "../audio/Forest.mp3";
import Lofi from "../audio/Lofi-Study.mp3";
import PeacefulPianoAudio from "../audio/Peaceful-Piano.mp3";
import RainAudio from "../audio/Rain.mp3";
import SoftAmbientAudio from "../audio/Soft-Ambient.mp3";
import SpaceJourneyAudio from "../audio/Space-Journey.mp3";
import "./style.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    if (playing) {
      audio.play();
      audio.loop = true;
    } else {
      audio.pause();
    }
  }, [playing]);
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};

export default function Dashboard({ setUser, setToken, setCurrentPage }) {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(true);
  const [search, setSearch] = useState(true);
  const [side, setSide] = useState(true);
  const [notes, setNotes] = useState(true);
  const [calender, setCalender] = useState(true);
  const [weather, setWeather] = useState(true);

  const [playingWind, toggleWind] = useAudio(AncientWindAudio);
  const [playingOcean, toggleOcean] = useAudio(DeepInTheOceanAudio);
  const [playingForest, toggleForest] = useAudio(ForestAudio);
  const [playingLofi, toggleLofi] = useAudio(Lofi);
  const [playingPiano, togglePiano] = useAudio(PeacefulPianoAudio);
  const [playingRain, toggleRain] = useAudio(RainAudio);
  const [playingSoftAmbient, toggleSoftAmbient] = useAudio(SoftAmbientAudio);
  const [playingSpace, toggleSpace] = useAudio(SpaceJourneyAudio);

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
              <h4>Hide Gadget</h4>

              <input
                onClick={() => {
                  setWeather(!weather);
                }}
                id="weather"
                type="checkbox"
              ></input>
              <label for="timer"> Weather</label>
              <br />
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
                  setCalender(!calender);
                }}
                id="calender"
                type="checkbox"
              ></input>
              <label for="timer"> Calender</label>
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
              <label for="side"> Calculator</label>
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

              {/* Audio */}
              <h4>Audio</h4>
              <div className="inBlock">
                <div>Ancient Wind</div>
                <button className="homeButton" onClick={toggleWind}>
                  {playingWind ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Deep In The Ocean</div>
                <button className="homeButton" onClick={toggleOcean}>
                  {playingOcean ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Forest</div>
                <button className="homeButton" onClick={toggleForest}>
                  {playingForest ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Lofi Study</div>
                <button className="homeButton" onClick={toggleLofi}>
                  {playingLofi ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Peaceful Piano</div>
                <button className="homeButton" onClick={togglePiano}>
                  {playingPiano ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Rain</div>
                <button className="homeButton" onClick={toggleRain}>
                  {playingRain ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Soft Ambient</div>
                <button className="homeButton" onClick={toggleSoftAmbient}>
                  {playingSoftAmbient ? "Pause" : "Play"}
                </button>
              </div>
              <div className="inBlock">
                <div>Space Journey</div>
                <button className="homeButton" onClick={toggleSpace}>
                  {playingSpace ? "Pause" : "Play"}
                </button>
              </div>
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

        {/* TODO: add ability to hide weather gadget */}

        {weather ? (
          <div id="weather" className="weather-gadget">
            <Weather />
          </div>
        ) : (
          <div id="weather" className="hide-weather">
            <Weather />
          </div>
        )}

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
        )}

        {/* TODO: add ability to hide weather gadget */}
        {calender? (        <div id="calender" className="calender-gadget">
          <h2>Calender</h2>
          <img
            onClick={() => {
              setCurrentPage("CalenderPage");
            }}
            className="calender-img"
            src={calenderpic}
          ></img>
        </div>): (<div id="calender" className="calender-hide">
          <h2>Calender</h2>
          <img
            onClick={() => {
              setCurrentPage("CalenderPage");
            }}
            className="calender-img"
            src={calenderpic}
          ></img>
        </div>)}


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
            <Calculator />
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
