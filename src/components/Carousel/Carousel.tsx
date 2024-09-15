import React, {useState} from "react";
import styles from "./Carousel.module.scss";

export type CarouselTypes = {
    contents: (()=>JSX.Element)[];
};

export default function Carousel({contents}:CarouselTypes) {
    const [contentIndex, setContentIndex] = useState(0)
    
    return(
        <div className={styles.carouselWrapper}>
            <div className={styles.contentsWrapper}>
                
                {contents.map(element => <div className={styles.sliderContent} style={{translate: `${-100 * contentIndex}%`}}> {element()} </div>
                )}

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


    function FirstPage(){
        return(
            <div style = {{
                height: 150,
                width: 150,
                backgroundColor: "blue"
            }}>
                Fist Page 
            </div>
        )
    }
    function SecondPage(){
        return(
            <div style = {{
                height: 150,
                width: 150,
                backgroundColor: "blue"
            }}>
                Fist Page 
            </div>
        )
    }
    const PAGES = [FirstPage,SecondPage]

    
    return(
        <>
        <Carousel contents={PAGES} />
        </>
    );
}