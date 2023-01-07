import React, { useState, useEffect, useRef } from "react";
import { CardsWrapper } from "../styled-components/CardSection";
import { H1, InfoElement } from "../styled-components/GameInfoSection";

import { CardsType } from "../App";
import { timeFormat } from "../utils/timeFormat";

type TimerProps = {
  cards?: CardsType[];
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
};

const Timer = ({ cards, seconds, setSeconds, minutes, setMinutes }: TimerProps) => {
  useEffect(() => {
    // Checks for is the game over ?
    if (cards?.every((card) => card.matched)) {
      return;
    }
    // Create Timer
    const interval = window.setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <InfoElement>
      <H1>Time = </H1> {timeFormat(seconds, minutes)} {/*This function is : Create this format for time ==>  00:00 */}
    </InfoElement>
  );
};

export default Timer;
