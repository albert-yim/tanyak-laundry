import React, {useState} from "react";
import styles from "./Carousel.module.scss";

export type CarouselTypes = {
    contents: (()=>JSX.Element)[];
};

export default function Carousel({contents}:CarouselTypes) {
    const [contentIndex, setContentIndex] = useState(0) //set array index as 0
    
    return(
        <div className={styles.carouselWrapper}>
            <div className={styles.contentsWrapper}> {/*align components in the array*/}
                {contents.map(element => <div className={styles.sliderContent} style={{translate: `${-100 * contentIndex}%`}}> {element()} </div>
                )} {/*show the only component on the appropriate index*/}
            </div>
            
            <div className={styles.buttonsWrapper}> {/*button underneath  that allows users switch to the other component*/}
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
                height: 300,
                width: 400,
                backgroundColor: "blue"
            }}>
                First Page 
            </div>
        )
    }
    function SecondPage(){
        return(
            <div style = {{
                height: 300,
                width: 400,
                backgroundColor: "red"
            }}>
                Second Page 
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