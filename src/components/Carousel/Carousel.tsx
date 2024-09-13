import React, {useState} from "react";
import styles from "./Carousel.module.scss";

import close from "../../assets/close.svg"
import dryer from "../../assets/dryer.svg"
import pause from "../../assets/pause.svg"
import washingMachine from "../../assets/washingMachine.svg"

export type CarouselTypes = {
    contents: string[];
};

export default function Carousel({contents}:CarouselTypes) {
    const [contentIndex, setContentIndex] = useState(0)
    function showNextContent() {
        setContentIndex(index => {
            if ( index === contents.length - 1)
                return 0
            return index + 1
        })
    }

    function showPrevContent() {
        setContentIndex(index => {
            if ( index === 0)
                return contents.length - 1
            return index - 1
        })
    }

    return(
        <div style={{
            width: "100%",
            height: "100%",
            position: "relative"
        }}>
            <div style={{
                width: "145px",
                height: "145px",
                display: "flex",
                overflow: "hidden",
            }}>
                {contents.map(element => (
                    <img src={element} width="100%" style={{translate: `${-100 * contentIndex}%`}}/>
                ))}
            </div>

            <div>
                {contents.map((_,index) => (
                    <button onClick={() => setContentIndex(index)}>{index}</button>
                ))}
            </div>
        </div>
    );
}

export function CarouselTest() {
    const ICONS = [close, dryer, pause, washingMachine]
    return(
        <>
        <Carousel contents={ICONS}/>
        </>
    );
}