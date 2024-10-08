import React, {useState,useRef, useEffect} from "react";
import styles from "./TimePicker.module.scss";
import cn from "classnames";

type TimePickerTypes = {
    duration: number;
    setDuration: (m:number) => void;

}

export default function TimePicker({duration, setDuration} : TimePickerTypes)  {
    //list necessary numbers for wheel component
    const numbers = [null,null,...Array.from({ length: 60 }, (_, i) => i),null,null];

    //use div element for referencing a value
    const itemRefs = useRef<HTMLDivElement>(null);
    
    //scroll automatically towards default duration number while rendering
    useEffect(() => {
        itemRefs?.current?.scrollTo({
            left: 30 * duration,
        })
    },)
    
    
    let xposNumber = 0
    const timeoutRef = useRef<number | null>(null)
    const [isScrolling, setIsScrolling] = useState(false)

    //function that runs another function after ensuring scolling is done
    function handleScroll() {
        //clears previous timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setIsScrolling(true);

        //sets a timeout to run after 200ms of no scrolling
        timeoutRef.current = window.setTimeout(() => {
            setIsScrolling(false);
            handleScrollEnd();
        }, 200)
    }

    //function that updates the current position
    function handleScrollEnd(){
        const xpos = itemRefs?.current?.scrollLeft ?? -1
        if (xpos < 0) return
        xposNumber = xpos/30
        setDuration(xposNumber)
    }

    return(
        <div className={styles.timePickerWrapper} >
            <div className={styles.numbersWrapper} 
                ref={itemRefs}
                onScroll = {handleScroll}
                >
                {numbers.map((number) => {
                    return (
                        <div 
                            id={`${number}`} 
                            className={cn(styles.labelWrapper, {
                                [styles.labelWrapper__selected]: (number === duration),
                            })}
                            onClick={() => {
                                itemRefs?.current?.scrollTo({
                                    left: 30 * number!,
                                    behavior: "smooth",
                                })
                                setDuration(number!)
                            }}
                        >
                            <span>{number}</span>
                        </div>
                    )
                })}
            </div>
            <div className={styles.vector}/>
        </div>
    )
}

export function TimePickerTest(){
    const [duration, setDuration] = useState<number>(40)
    return(
        <div>
            <TimePicker duration={duration} setDuration={setDuration}/>
            <span>{duration}</span>
        </div>
    )
} 