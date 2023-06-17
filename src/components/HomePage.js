import React from "react";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Header } from "./Header";
import { Nav } from "./Nav";

function HomePage() {
    return (
        <>
        <Header>
            <Nav />
        </Header>
        <Main />
        <Footer>
            <Nav />
        </Footer>
        </>
    )
}

export default HomePage;