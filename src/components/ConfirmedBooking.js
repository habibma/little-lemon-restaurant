import React, { useState } from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";

import { validateEmail } from "./utils";

export const ConfirmedBooking = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <div className="container">
                    <section className="eight">
                        <h1>The booking has been confirmed (temporary page)</h1>
                    </section>
                    <br />
                    <section className="four">
                        <form>
                            <fieldset>
                                <div className="Field">
                                    <label htmlFor="firstName">First Name: <sup>*</sup></label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        minLength={1} maxLength={25}
                                        autoFocus
                                        value={firstName}
                                        onChange={({target}) => setFirstName(target.value)}
                                    />
                                </div>
                                <div className="Field">
                                    <label htmlFor="lastName">Last Name: <sup>*</sup></label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        minLength={1} maxLength={25}
                                        value={lastName}
                                        onChange={({target}) => setLastName(target.value)}
                                    />
                                </div>
                                <div className="Field">
                                    <label htmlFor="email">Email: <sup>*</sup></label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        inputMode="email"
                                        value={email}
                                        onChange={({target}) => setEmail(target.value)}
                                    />
                                </div>
                                <div className="Field">
                                    <label htmlFor="comment">Comment: </label>
                                    <textarea
                                        rows="5" maxlength="250" placeholder="Type here..."
                                        value={comment}
                                        onChange={({target}) => setComment(target.value)}
                                    >
                                    </textarea>
                                </div>
                                <input disabled={!firstName || !lastName || !email} type="submit" value="Submit"/>
                            </fieldset>
                        </form>
                    </section>
                </div>
            </Main>

        </>
    )
}