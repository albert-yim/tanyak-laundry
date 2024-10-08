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
    
    let xposNumber = 0
    //scroll automatically towards default duration number while rendering
    useEffect(() => {
        itemRefs?.current?.scrollTo({
            left: 30 * duration,
        })
        
    },[])
        

    return(
        <div className={styles.timePickerWrapper} >
            <div className={styles.numbersWrapper} 
                ref={itemRefs}
                onScroll = {() => {
                    const xpos = itemRefs?.current?.scrollLeft ?? -1
                        if (xpos < 0) return
                        xposNumber = xpos/30
                        console.log(xposNumber)
                        setDuration(xposNumber)
                }}
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