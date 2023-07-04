import React, {useState } from "react";
import "../assets/css/carousel.css"
import prev from '../imgs/Antu_go-previous-view.svg';
import next from '../imgs/Antu_arrow-right.svg'
import {Avatar} from "./Avatar";

function Carousel({ children }) {

    const [currntIndex, setCurrentIndex] = useState(0);

    const updateIndex = (n) => {
        if (n < 0) {
            n = React.Children.count(children) -1;
        } else if (n >= React.Children.count(children) ) {
            n = 0;
        }
        setCurrentIndex (n)
    }

    return (
        <div className="carousel">
            <section className="inner" style={{transform: `translateX(-${currntIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: ""}); //widtth here and in line 40 can be deleted
                })}
            </section>
            <section className="indicator">
                <button className="arrow-left" onClick={() => updateIndex(currntIndex - 1)}><img src={prev} alt="" /></button>
                {React.Children.map(children, (child, index) => <button className={`bullet ${index===currntIndex ? "active-bullet" : ""}`} onClick={() => updateIndex(index)}>{index===currntIndex ? "⚫" : "⚪"}</button> )}
                <button className="arrow-right" onClick={() => updateIndex(currntIndex + 1)}><img src={next} alt="" /></button>
            </section>
        </div>
    )
}

//https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

function CarouselItem( {children, width}) {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}

export function CustomersSay() {
    return (
        <Carousel>
            <CarouselItem><Avatar /></CarouselItem>
            <CarouselItem><Avatar /></CarouselItem>
            <CarouselItem><Avatar /></CarouselItem>
            <CarouselItem><Avatar /></CarouselItem>
        </Carousel>
    )
}