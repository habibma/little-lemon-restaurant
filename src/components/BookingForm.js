import React, { useState } from "react"

export const BookingForm = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState("");
    const [occation, setOccation] = useState("");

    const [availableTimes]  = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

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
            id="res-date"
            value={date}
            onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
           {availableTimes.map(item => <option>{item}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="1" min="1" max="10"
            id="guests"
            value={number}
            onChange={({target}) => setNumber(target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
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