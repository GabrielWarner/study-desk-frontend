import React, {useEffect, useState } from "react";
// import { Grid, GridItem } from "@chakra-ui/react";
import Pomodoro from "../../Pomodoro";
import GoogleSearch from "../../GoogleSearch";
import Inspirational from "../../Inspirational";
import Weather from "../../Weather";
import Notes from "../../Notes";
import Calculator from "../../Calculator";
import Modal from "react-bootstrap/Modal"
import Draggable from 'react-draggable'; // Both at the same time;
// import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time;
// import Resizable from "re-resizable";

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
  }, [audio, playing]);

  useEffect(() => {
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);
  return [playing, toggle];
};


export default function Dashboard({ setUser, setToken, setCurrentPage }) {
  const [show, setShow] = useState(false);
  const [background, setBackground] = useState("grid-container");
  // Gadget
  const [weather, setWeather] = useState(JSON.parse(localStorage.getItem("Weather")));
  const [timer, setTimer] = useState(JSON.parse(localStorage.getItem("Pomodoro")));
  const [calender, setCalender] = useState(JSON.parse(localStorage.getItem("Calendar")));
  const [search, setSearch] = useState(JSON.parse(localStorage.getItem("Search")));
  const [side, setSide] = useState(JSON.parse(localStorage.getItem("Calculator")));
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("Note")));

  // Audio
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

  // Set Local Storage
  useEffect(()=>{
    localStorage.setItem('Weather', weather)
    localStorage.setItem('Pomodoro', timer)
    localStorage.setItem('Calendar', calender)
    localStorage.setItem('Search', search)
    localStorage.setItem('Calculator', side)
    localStorage.setItem('Note', notes)
  }, [weather, timer, calender, search, side, notes])

  
  // Set Token
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
          console.log(background)
        });
      }
    });
  }, [setToken, setUser]);

  return (
    <div className="dashboard">
      <div className={background}>
        <div id="quote" className="quote-widget">
          <button className="homeButton gadgetSetting" onClick={handleShow}>
            GADGET SETTINGS
          </button>
          <Modal className="modalBorder" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modalTitle">Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Background Change</h4>
              {/* button --> onClick className="grid-container" --> style = "background-image: url(../../../img/Rain.gif);" */}
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container")}}>Rain</button>
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container2")}}>Sunset</button>
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container3")}}>After Dark</button>
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container4")}}>Disco</button>
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container5")}}>Forest</button>
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container6")}}>Your Name</button>
              <button className="homeButton modalButton" onClick={()=> {setBackground("grid-container7")}}>Waterfall</button>
              {/* <button className="homeButton" onClick={()=> }>Sunset</button> */}
              <h4>Hide Gadget</h4>

              <button
              className="homeButton modalButton"
                onClick={() => {
                  setWeather(!weather);
                  weather? localStorage.setItem('Weather', true) : localStorage.setItem('Weather', false)
                }}
                id="weather"
              >Weather</button>
              


              <button
              className="homeButton modalButton"
                onClick={() => {
                  setTimer(!timer);
                  console.log(timer)
                }}
                id="timer"
              >Pomodoro</button>


              <button
              className="homeButton modalButton"
                onClick={() => {
                  setCalender(!calender);
                  calender? localStorage.setItem('Calender', true) : localStorage.setItem('Calendar', false)
                }}
                id="calender"
              >Calender</button>  


              <button
              className="homeButton modalButton"
                onClick={() => {
                  setSearch(!search);
                  search? localStorage.setItem('Search', true) : localStorage.setItem('Search', false)
                }}
                id="search"
              >Search Bar</button>


              <button
              className="homeButton modalButton"
                onClick={() => {
                  setSide(!side);
                  side? localStorage.setItem('Calculator', true) : localStorage.setItem('Calculator', false)
                }}
                id="side"
              >Calculator</button>

              
              <button
              className="homeButton modalButton"
                onClick={() => {
                  setNotes(!notes);
                  notes? localStorage.setItem('Note', true) : localStorage.setItem('Note', false)
                }}
                id="notes"
              >Notes</button>


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


        {weather ? (
          
          <Draggable>
          <div id="weather" className="weather-gadget">
            <Weather />
          </div>
          </Draggable>
        ) : (
          <div id="weather" className="hide-weather">
            <Weather />
          </div>
        )}

        {timer ? (
          <Draggable>
          <div id="timer" className="timer">
            {/* <div className="textOpacity"> */}
            <Pomodoro />
            {/* </div> */}
          </div>
          </Draggable>
        ) : (
          <div id="timer" className="hideTimer">
            <Pomodoro />
          </div>
        )}

        {/* TODO: add ability to hide weather gadget */}
        {calender? (
        <Draggable>
        <div id="calender" className="calender-gadget">
          <h2>Calender</h2>
          <img
            onClick={() => {
              setCurrentPage("CalenderPage");
            }}
            className="calender-img"
            src={calenderpic}
            alt="Calender Img"
          ></img></div></Draggable>
          ): (<div id="calender" className="calender-hide">
          <h2>Calender</h2>
          <img
            onClick={() => {
              setCurrentPage("CalenderPage");
            }}
            className="calender-img"
            src={calenderpic}
            alt="Calender Img"
          ></img>
        </div>)}


        {search ? (
          <Draggable>
          <div id="search" className="search-bar">
            {/* <GoogleSearch /> */}
          </div>
          </Draggable>
        ) : (
          <div id="search" className="hideSearchBar">
            <GoogleSearch />
          </div>
        )}

        {side ? (
          <Draggable>
          <div id="side" className="side">
            {/* <Calculator /> */}
          </div>
          </Draggable>
        ) : (
          <div id="side" className="hideSide">
            <Weather />
          </div>
        )}

        {notes ? (
          <Draggable>
          <div id="main" className="notes-main">
            {/* <Notes /> */}
          </div>
          </Draggable>
        ) : (
          <div id="main" className="hideNote">
            <Notes />
          </div>
        )}
      </div>
    </div>
  );
}
