import React, { useState } from "react"

export const BookingForm = props => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState("");
    const [occation, setOccation] = useState("");

    const dateChangeHandler = ({target}) => {
        setDate(target.value)
    }

    const timeChangeHandler = ({target}) => {
        setTime(target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setDate("");
        setTime("");
        setNumber("");
        setOccation("");
    }

    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={submitHandler}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                name="res-date"
                id="res-date"
                value={date}
                onChange={dateChangeHandler}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={timeChangeHandler}>
            {props.value.availableTimes.map((item, index) => <option key={index} name={item}>{item}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                name="guests"
                placeholder="1" min="1" max="10"
                id="guests"
                value={number}
                onChange={({target}) => setNumber(target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={occation}
                onChange={({target}) => setOccation(target.value)}
            >
            <option>Birthday</option>
            <option>Anniversary</option>
            </select>
            <input disabled={!date || !time || !number || !occation} type="submit" value="Make Your reservation" />
        </form>
    )
}