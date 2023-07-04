import React, { useReducer } from "react"

import { BookingForm } from "./BookingForm"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Main } from "./Main"


const updateTimes = (availableTimes, action) => {
        return availableTimes;
}

export function BookingPage() {

    const initializeTimes  = (availableTimes) => {
        return availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }

    const [availableTimes, dispatch, init] = useReducer (updateTimes, ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], initializeTimes);


    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <div className='container'>
                    <section className="eight">
                    <h1>Booking Page</h1>
                    </section>
                </div>
                <div className="container">
                    <section className="eight">
                        <BookingForm value={{availableTimes, dispatch, init}}/>
                    </section>
                </div>
            </Main>
        </>
    )
}