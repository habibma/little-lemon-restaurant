import React from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { Main } from "../Main";
import { Chicago } from '../Chicago';
import { Specials } from '../Specials';
import { CustomersSay } from '../CustomersSay';
import { CallToAction } from '../CallToAction';

import restaurantfood from '../../imgs/restaurantfood.jpg';
import about1 from '../../imgs/mario-and-adrian-a.jpg';
import about2 from '../../imgs/restaurant-chef.jpg';


function HomePage() {
    return (
        <>
        <Header>
            <Nav />
        </Header>
        <Main>
            <div className='container'>
                <section className='slider slider-row eight'>
                    <article>
                        <Chicago></Chicago>
                        <CallToAction href="/reservation">Reserve a Table</CallToAction>
                    </article>
                    <img src={ restaurantfood } alt="restaurant food" />
                </section>
            </div>
            <div className='container'>
                <section className='sideber-2 eight'>
                    <h2>This Week Specials!</h2>
                    <CallToAction>Online Menu</CallToAction>
                </section>
                <section className='promption eight'>
                    <Specials />
                </section>
            </div>
            <div className='container'>
                <section className='testimonial eight'>
                   <CustomersSay />
                </section>
            </div>
            <div className='container'>
                <section className='about eight'>
                    <article>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </article>
                    <div>
                        <div className='image'><img src={about1} alt='Little Lemon&#39;s chef' /></div>
                        <div className='image'><img src={about2} alt='Little Lemon&#39;s chef' /></div>
                    </div>
                </section>
            </div>
        </Main>
        <Footer>
            <Nav />
        </Footer>
        </>
    )
}

export default HomePage;