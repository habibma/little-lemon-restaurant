import React from "react";

import { Main } from "../Main";
import { Chicago } from "../Chicago";

export const About = () => {
    return (
    <>
        <Main>
            <div className='container'>
                <section className="eight">
                <h1>About Page</h1>
                </section>
            </div>
            <div className="container">
                <section className="eight">
                    <Chicago />
                </section>
            </div>
        </Main>
    </>
    )
}