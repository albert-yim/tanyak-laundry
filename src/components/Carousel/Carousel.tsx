import React, {useState, useCallback} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";
import BasicButton from "../BasicButton/BasicButton"

export type CarouselTypes = {
    contents: JSX.Element[];
};

export default function Carousel({contents}:CarouselTypes) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows: false,
        dotsClass: `slick-dots ${styles.sliderButton}`

    }
    return(
        <div className = {styles.sliderWrapper}>
            <Slider {...settings}>
            {contents.map(element => <div> {element} </div>
                )}
            </Slider>
        </div>
    );
}

export function CarouselTest() {

    const FirstPage = 
        <div style = {{
            height: 300,
            width: 400,
            backgroundColor: "blue"
        }}>
            First Page 
        </div>
    
    const SecondPage =
            <div style = {{
                height: 300,
                width: 400,
                backgroundColor: "red"
            }}>
                Second Page 
            </div>

    const PAGES = [FirstPage,SecondPage]

    
    return(
        <>
        <Carousel contents={PAGES} />
        </>
    );
}