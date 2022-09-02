import React from "react";
import "./style.css";
import Footer from "../Footer";

export default function index({
  handleFormCreate,
  handleInputChange,
  user,
  username,
  email,
  password,
  setCurrentPage,
}) {
  return (
    <div>
      {user.email ? (
        setCurrentPage("Dashboard")
      ) : (
        <div className="registerContainer">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <h1 className="registerTitle">Create Account</h1>
          <form className="register-form">
            <div>
              <input
                className="form-input"
                type="text"
                id="userName-login"
                value={username}
                name="username"
                onChange={handleInputChange}
                placeholder="Insert User Name"
              />
            </div>

            <div>
              <input
                className="form-input"
                type="text"
                id="email-login"
                value={email}
                name="email"
                onChange={handleInputChange}
                placeholder="Insert Email"
              />
            </div>

            <div>
              <input
                className="form-input"
                value={password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Insert Password"
              />
            </div>

            <div>
              <button
                className="form-input registerBtn"
                onClick={handleFormCreate}
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
          <Footer />
        </div>
      )}
    </div>
  );
}
