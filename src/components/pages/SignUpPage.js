import React from "react";
import { SignUpForm } from "../SignUpForm";
import { Header } from "../Header";
import { Main } from "../Main";
import { Nav } from "../Nav";

export const SignUpPage = () => {
    return (
        <>
            <Main>
                <div className="container">
                    <section className="eight">
                        <h1>Sign up Page</h1>
                    </section>
                    <br />
                    <section className="four">
                        <SignUpForm />
                    </section>
                </div>
            </Main>
        </>
    )
}