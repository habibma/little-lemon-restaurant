import React from "react";

export const PasswordErrorMessage = () => {
    return (
      <p  role="alert" className="FieldError">Password should have at least 8 characters</p>
    );
  }

export const PossibleGuestNumbers = () => {
    return <p role="alert" className="FieldError">The nubmber should be between 1 and 10</p>
}