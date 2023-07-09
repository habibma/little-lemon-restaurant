import React, { useState } from "react";
import { validateEmail } from "./utils";

import { PasswordErrorMessage } from "./Errors";

import "../assets/css/form.css"


export function SignUpForm() {

  const [firstName, setFirstName] = useState("");
  const handleChangeFirstName = ({ target }) =>
    setFirstName(target.value);

  const [lastName, setLastName] = useState("");
  const handleCahngeLastName = ({ target }) =>
    setLastName(target.value);

  const [email, setEmail] = useState("");
  const handleChangeEmail = ({ target }) =>
    setEmail(target.value);

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const handleChangePassword = ({ target }) => {
    setPassword({value: target.value, isTouched: true})
    }
  const [role, setRole] = useState("role");
  const handleChangeRole = ({ target }) =>
    setRole(target.value);

  const getIsFormValid = () => {
      return (firstName && email && validateEmail(email) && password.value.length >= 8 && role !== "role");
    };

  const clearForm = () => {
    setFirstName("");
    setLastName('');
    setEmail('');
    setPassword({
    value: "",
    isTouched: false,
    });
    setRole("role");
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
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                placeholder="Last name"
                value={lastName}
                onChange={handleCahngeLastName}
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                placeholder="Email address"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
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
              <select value={role} onChange={handleChangeRole}>
                <option value="role" disabled>Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <input value="Create account" type="submit" disabled={!getIsFormValid()} />
          </fieldset>
        </form>
  );
}
