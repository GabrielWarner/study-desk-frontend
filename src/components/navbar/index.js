import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function NavigationBar({ user, handlePageChange, setUser }) {
  const logout = () => {
    localStorage.removeItem("token");
    setUser("");
    handlePageChange("Home");
  };
  return (
    <div>
      <Navbar className="navColor" expand="lg">
        <Container style={{ minHeight: "0" }}>
          {/* Need to use conditional rendering to render either LOGOUT or HOME depending on if they are signed in or not */}

          {/* We might not need a homebutton since there is no point in going to homepage once you are logged in */}
          <button
            className="homeButton"
            onClick={() => handlePageChange("Home")}
          >
            HOME
          </button>

          {/* onClick logout user and send them to home page */}
          {user.email ? (
            <>
              <button
                className="homeButton"
                onClick={() => handlePageChange("Dashboard")}
              >
                DASHBOARD
              </button>
              <button className="homeButton" onClick={() => logout()}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <button
                className="homeButton"
                onClick={() => handlePageChange("Login")}
              >
                LOGIN
              </button>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
