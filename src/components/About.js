import React from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Chicago } from "./Chicago";
import { Footer } from "./Footer";

export const About = () => {
    return (
    <>
        <Header>
            <Nav />
        </Header>
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
        <Footer />
    </>
    )
}