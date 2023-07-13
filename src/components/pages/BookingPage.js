import React, { useReducer } from "react"
import { useNavigate } from "react-router-dom"

import { BookingForm } from "../BookingForm"
import { Header } from "../Header"
import { Nav } from "../Nav"
import { Main } from "../Main"
import { Footer } from "../Footer"


const updateTimes = (availableTimes, action) => {
        return availableTimes;
}

export function BookingPage() {

    // const [data, setData] = useState();
    // const fetchData = () => {
    //     fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

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
            <Header>
                <Nav />
            </Header>
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
            <Footer />
        </>
    )
}