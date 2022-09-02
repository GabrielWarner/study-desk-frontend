import React from "react";
import "./style.css";
import Footer from "../Footer";

export default function Login({
  handleFormSubmit,
  handleInputChange,
  user,
  email,
  password,
  setCurrentPage,
}) {
  return (
    <div>
      {user.email ? (
        setCurrentPage("Dashboard")
      ) : (
        <div className="loginContainer">
          <h1 className="loginTitle">Login</h1>
          <form className="login-form">
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
                className="form-input loginBtn"
                onClick={handleFormSubmit}
                type="submit"
              >
                Login
              </button>
            </div>

            {/* TODO: have create account button link to create account page */}
            <div>
              <button
                className="form-input loginBtn"
                onClick={(e) => {
                  setCurrentPage("Register");
                }}
                href="/create-account"
              >
                Create Account
              </button>
            </div>
          </form>
          <Footer />
        </div>
      )}
    </div>
  );
}
