import React from "react";

export const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  }

export const PossibleGuestNumbers = () => {
    return <p className="FieldError">The nubmber should be between 1 and 10</p>
}