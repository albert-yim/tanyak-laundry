import React, { useState, useRef, useEffect } from "react";
import styles from "./TimePicker.module.scss";
import cn from "classnames";

type TimePickerTypes = {
  time: number;
  setTime: (duration: number) => void;
};

//magic numbers
const MAX_TIME = 60;
const TIME_BLOCK_WIDTH = 30;

export default function TimePicker({ time, setTime }: TimePickerTypes) {
  //list necessary numbers for wheel component
  const displayTimes = [
    0,
    0,
    ...Array.from({ length: MAX_TIME }, (_, i) => i + 1),
    0,
    0,
  ];

  //use div element for referencing a value
  const itemRefs = useRef<HTMLDivElement>(null);

  //scroll automatically towards default duration number while rendering
  useEffect(() => {
    itemRefs?.current?.scrollTo({
      left: TIME_BLOCK_WIDTH * (time - 1),
    });
  }, []);

  const timeoutRef = useRef<number | null>(null);

  //function that runs another function after ensuring scolling is done
  function handleScroll() {
    //clears previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    //sets a timeout to run after 200ms of no scrolling
    timeoutRef.current = window.setTimeout(() => {
      handleScrollEnd();
    }, 200);
  }

  //function that updates the current position
  function handleScrollEnd() {
    const xpos = itemRefs?.current?.scrollLeft ?? -1;
    if (xpos < 0) return;
    setTime(xpos / TIME_BLOCK_WIDTH + 1);
  }

  return (
    <div className={styles.timePickerWrapper}>
      <div
        className={styles.numbersWrapper}
        ref={itemRefs}
        onScroll={handleScroll}
      >
        {displayTimes.map((displayTime, index) => {
          return (
            <div
              key={`${index}`}
              className={cn(styles.labelWrapper, {
                [styles.labelWrapper__selected]: displayTime === time,
                [styles.labelWrapper__invisible]: displayTime === 0,
              })}
              onClick={() => {
                itemRefs?.current?.scrollTo({
                  left: TIME_BLOCK_WIDTH * (displayTime - 1),
                  behavior: "smooth",
                });
                setTime(displayTime);
              }}
            >
              <span>{displayTime}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.vector} />
    </div>
  );
}

export function TimePickerTest() {
  const [duration, setDuration] = useState<number>(40);
  return (
    <div>
      <TimePicker time={duration} setTime={setDuration} />
      <span>{duration}</span>
    </div>
  );
}
