import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dasboard";
import CalenderPage from "./components/pages/CalenderPage/CalenderPage";


// import Weather from "./components/Weather";
import Notes from "./components/Notes";
// import Pomodoro from "./components/Pomodoro";
import Calendar from "./components/Calendar";
import Calculator from "./components/Calculator";


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [user, setUser] = useState({
    id:0,
    email:'',
    username:''
  });
  const [token, setToken] = useState("");

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
          console.log(data)
          setToken(storedToken);
          setUser({
            id:data._id,
            email:data.email,
            username:data.username
          })
        })
      }
    });
  }, []);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }else if (inputType === 'username') {
      setUserName(inputValue);
    }
  };
  //function that handles the submit, here we can use fetch request to get TOKEN
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser({
          id: data.user._id,
          email: data.user.email,
        });
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", data.user._id);
      });
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setPassword("");
    setEmail("");
  };

        const handleFormCreate = (e) => {
          // Preventing the default behavior of the form submit (which is to refresh the page)
          e.preventDefault();
  
         fetch("http://localhost:3001/api/users/signup",{
          method:"POST",
          body:JSON.stringify({
            username,
            email,
            password
          }),
          headers:{
            "Content-Type":"application/json"
          }
         }).then(res=>{
            return res.json()
         }).then(data=>{
          console.log(data)
          setUser({
            id:data.user._id,
            email:data.user.email,
            username:data.user.username
          })
          setToken(data.token)
          localStorage.setItem("token", data.token)
         })
          // If everything goes according to plan, we want to clear out the input after a successful registration.
          setPassword('');
          setEmail('');
          setUserName('')
        };


  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {

    if (currentPage === "Home") {
      return <Homepage setToken={setToken} setUser={setUser} user={user} handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Login") {
      return (
        <Login
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          setCurrentPage={setCurrentPage}
          user={user}
          email={email}
          password={password}
        />
      );
    }
    if (currentPage === 'Register') {
      return <Register
      handleFormCreate={handleFormCreate}
      handleInputChange={handleInputChange}
      setCurrentPage={setCurrentPage}
      user={user}
      userName={username}
      email={email}
      password={password} />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard setCurrentPage={setCurrentPage} setUser={setUser} setToken={setToken}/>;
    }
    if (currentPage === "Calender") {
      return <CalenderPage setUser={setUser} setToken={setToken}/>
    }
  };

  return (
    <div className="App">
      <Navbar
        user={user}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setUser={setUser}
        setToken={setToken}
      />
      {renderPage()}
      {/* <Pomodoro /> */}
      {/* <Inspirational /> */}
      {/* <GoogleSearch /> */}
      {/* <Weather />   */}
      {/* <Notes /> */}
      {/* <Calendar />  */}
      {/* { <Calculator />} */}
    </div>
  );
}

export default App;
