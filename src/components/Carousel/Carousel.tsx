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

    return(
        <div className={styles.carouselWrapper}>
            <div className={styles.contentsWrapper}>
                {contents.map(element => (
                    <img src={element} width="100%" style={{translate: `${-100 * contentIndex}%`}}/>
                ))}
            </div>

            <div className={styles.buttonsWrapper}>
                {contents.map((_,index) => (
                    <div className={`${styles.button} ${index === contentIndex ? styles.buttonClicked : styles.button}`} onClick={() => setContentIndex(index)}></div>
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