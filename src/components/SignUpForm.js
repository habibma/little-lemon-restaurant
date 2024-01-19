import React, { useState } from "react";
import { validateEmail } from "./utils";

import { PasswordErrorMessage } from "./Errors";

import "../assets/css/form.css"


export function SignUpForm() {

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "role"
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

  /* const [firstName, setFirstName] = useState("");
  const handleChangeFirstName = ({ target }) =>
    setFirstName(target.value);

  const [lastName, setLastName] = useState("");
  const handleCahngeLastName = ({ target }) =>
    setLastName(target.value);

  const [email, setEmail] = useState("");
  const handleChangeEmail = ({ target }) =>
    setEmail(target.value);



  const [role, setRole] = useState("role");
  const handleChangeRole = ({ target }) =>
    setRole(target.value); */

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
    setPassword("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
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
                name= "password"
              />
              {password.value.length < 8 && password.isTouched && <PasswordErrorMessage />}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={signUpData.role} onChange={handleChange}>
                <option value="role" disabled>Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
              <input type="checkbox" id="signUp--checkbox" /><label htmlFor="signUp--checkbox">Subscribe to Newsletter</label>
            </div>
            <input value="Create account" type="submit" disabled={!getIsFormValid()} />
          </fieldset>
        </form>
  );
}
