import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function NavigationBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          {/* Need to use conditional rendering to render either LOGOUT or HOME depending on if they are signed in or not */}

          {/* We might not need a homebutton since there is no point in going to homepage once you are logged in */}
          <button onClick={() => handlePageChange("Home")}>HOME</button>
          {/* onClick logout user and send them to home page */}
          <button>LOGOUT</button>
        </Container>
      </Navbar>
    </div>
  );
}
