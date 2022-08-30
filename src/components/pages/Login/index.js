import React, { useState } from 'react'
import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../../utils/helpers';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'password') {
          setPassword(inputValue);
        }
      };


      //function that handles the submit, here we can use fetch request to get TOKEN
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!checkPassword(password)) {
          setErrorMessage(
            `Choose a more secure password.`
          );
          return;
        }

        
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setPassword('');
        setEmail('');
      };


  return (
    <div>

        <h2 className="text-dark">Login</h2>
        <form className="form login-form">

            <div className="form-group text-dark row justify-content-center">
            <input
            className="form-input"
            type="text" id="email-login"
            value={email}
            name="email"
            onChange={handleInputChange}
            placeholder="insert email" />
            </div>

            <div className="form-group text-dark row justify-content-center">
            <input 
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Insert Password" />
            </div>
            
            <div className="row justify-content-center mb-3">
            <button
            onClick={handleFormSubmit}
            className="btn btn-primary btn-sizing"
            type="submit">Login</button>
            </div>
            
            {/* TODO: have create account button link to create account page */}
            <div className="row justify-content-center">
            <a className="btn btn-primary btn-sizing" href="/create-account">Create Account</a>
            </div>
        </form>
    </div>
  )
}
