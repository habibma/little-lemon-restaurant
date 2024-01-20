import React, { useState } from "react";
import { validateEmail } from "./utils";

import { PasswordErrorMessage } from "./Errors";

import "../assets/css/form.css"


export function SignUpForm() {

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "role",
    isSubscribed: false,
  });

  const handleChange = ({target}) => {
     const {value, name, type, checked} = target;
    setSignUpData((prevState) => ({
        ...prevState,
        [name] : type === "checkbox" ? checked : value
    }))
  }

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const handleChangePassword = ({ target }) => {
    setPassword({value: target.value, isTouched: true})
    }

  const getIsFormValid = () => {
      return (signUpData.firstName && signUpData.email && validateEmail(signUpData.email) && password.value.length >= 8 && signUpData.role !== "role");
    };

  const clearForm = () => {
    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      role: "role"
    })
    setPassword({
      value: "",
      isTouched: false,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* <h2>Sign Up</h2> */}
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                placeholder="First name"
                value={signUpData.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                placeholder="Last name"
                value={signUpData.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                placeholder="Email address"
                value={signUpData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                value={password.value}
                placeholder="Password"
                onChange={handleChangePassword}
              />
              {password.value.length < 8 && password.isTouched && <PasswordErrorMessage />}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={signUpData.role} onChange={handleChange} name="role">
                <option value="role" disabled>Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="signUp--checkbox">
                <input type="checkbox" value={signUpData.isSubscribed} handleChange={handleChange}/><label htmlFor="signUp--checkbox">Subscribe to Newsletter</label>
            </div>
            <input value="Create account" type="submit" disabled={!getIsFormValid()} />
          </fieldset>
        </form>
  );
}
