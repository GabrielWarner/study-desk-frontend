import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import Homepage from "./components/pages/Home/index";
import Login from "./components/pages/Login/index";
import Register from "./components/pages/Register/index";
import Dashboard from "./components/pages/Dasboard/index";
import Pomodoro from "./components/Pomodoro/index";
import Inspirational from "./components/InspirationalQ/index";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Homepage />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Register") {
      return <Register />;
    }
    return <Dashboard />;
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Pomodoro />
      <Inspirational />
    </div>
  );
}

export default App;
