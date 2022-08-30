import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dasboard';
import Pomodoro from './components/Pomodoro';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');


  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Homepage />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Register') {
      return <Register />;
    }
    return <Dashboard />;
  };

  return (
    <div className="App">
      <Pomodoro/>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      
    </div>
  );
}

export default App;
