import React, { useState } from "react"
import "../assets/css/form.css"

import { PossibleGuestNumbers } from "./Errors"

export const BookingForm = props => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState("");
    const [occation, setOccation] = useState("select");

    const dateChangeHandler = ({target}) => {
        setDate(target.value)
    }

    const timeChangeHandler = ({target}) => {
        setTime(target.value);
    }

    const getIsFormValid = () => {
        return (date && time && number && occation);
      };

      const clearForm = () => {
        setDate("");
        setTime("");
        setNumber("");
        setOccation("select");
      }

    const submitHandler = e => {
        e.preventDefault();
        clearForm();
        // props.value.submitForm();
        alert(`Booking has been submited`) //a temorary onSubmit feedback
    }

    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <div className="Field">
                    <label htmlFor="res-date">Choose date <sup>*</sup></label>
                    <input
                        type="date"
                        name="res-date"
                        id="res-date"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="Field">
                    <label htmlFor="res-time">Choose time <sup>*</sup></label>
                    <select id="res-time " value={time} onChange={timeChangeHandler}>
                    {props.value.availableTimes.map((item, index) => <option key={index} name={item}>{item}</option>)}
                    </select>
                </div>
                <div className="Field">
                    <label htmlFor="guests">Number of guests <sup>*</sup></label>
                    <input
                        type="number"
                        name="guests"
                        placeholder="1"
                        min="1" max="10"
                        id="guests"
                        value={number}
                        onChange={({target}) => setNumber(target.value)}
                    />
                    {(number && number < 1 || number > 10) && <PossibleGuestNumbers />}
                </div>
                <div className="Field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={occation}
                        onChange={({target}) => setOccation(target.value)}
                    >
                        <option value="select" disabled>select an occassion...</option>
                        <option value="birthday">Birthday</option>
                        <option value="annivarsary">Anniversary</option>
                    </select>
                    </div>
                    <input disabled={!getIsFormValid()} type="submit" value="Make Your reservation" />
            </fieldset>
        </form>
    )
}