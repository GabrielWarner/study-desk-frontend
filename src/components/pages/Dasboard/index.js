import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Pomodoro from "../../Pomodoro";
import GoogleSearch from "../../GoogleSearch";
import Inspirational from "../../Inspirational";
import Weather from "../../Weather";
import Notes from "../../Notes";
import Calendar from "../../Calendar";

import "./style.css";

export default function Dashboard({ setUser, setToken }) {
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
      {/* <Grid
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={1} colSpan={1} bg='tomato'> <Pomodoro/></GridItem>
  <GridItem colSpan={2} bg='papayawhip'> <GoogleSearch/> </GridItem>
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem rowSpan={4} bg='papayawhip' />
  <GridItem colSpan={4}  bg='tomato' />
</Grid> */}

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

      {/* <Grid
      className=''
  templateAreas={`"clock quote"
                  "side search"
                  "side main"
                  "side main"`}
  gridTemplateRows={'.25fr .25fr .5fr 1.5fr'}
  gridTemplateColumns={'.6fr 1.5fr'}
  h='93vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'search'}>
    <GoogleSearch/>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'quote'}>
    <Inspirational/>
    </GridItem>
  <GridItem pl='2' bg='pink.300' area={'side'}>
    <Weather/>
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    <Notes/>
  </GridItem>

  <GridItem style={{justifyContent:"center",wordBreak:"break-all"}} pl='2' bg='blue.300' area={'clock'}>
  <Pomodoro/>
  </GridItem>

  </Grid> */}
    </div>
  );
}
