import React from "react"

import { BookingForm } from "./BookingForm"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Main } from "./Main"

export function BookingPage() {
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <div className='container'>
                    <section className="eight">
                    <h1>Booking HomePage</h1>
                    </section>
                </div>
                <div className="container">
                    <section className="eight">
                        <BookingForm/>
                    </section>
                </div>
            </Main>
        </>
    )
}