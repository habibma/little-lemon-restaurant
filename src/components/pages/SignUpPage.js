import React from "react";
import { SignUpForm } from "../SignUpForm";
import { Main } from "../Main";

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