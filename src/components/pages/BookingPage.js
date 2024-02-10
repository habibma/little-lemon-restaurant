import React, { useReducer } from "react"
import { useNavigate } from "react-router-dom"

import { BookingForm } from "../BookingForm"
import { Main } from "../Main"

const updateTimes = (availableTimes, action) => {
        return availableTimes;
}

export function BookingPage() {


    const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    const [availableTimes, dispatch, init] = useReducer (updateTimes, initialAvailableTimes, initializeTimes);

    const navigate = useNavigate();

    const submitForm = () => {
        //submitAPI(formData)
        navigate("/confirmation");
    }

    return (
        <>
            <Main>
                <div className='container'>
                    <section className="eight">
                    <h1>Booking Page</h1>
                    <br />
                    </section>
                    <section className="four">
                        <BookingForm value={{availableTimes, dispatch, init, submitForm}}/>
                    </section>
                </div>
            </Main>
        </>
    )
}