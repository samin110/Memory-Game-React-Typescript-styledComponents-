import React, { useState, useEffect, useRef } from "react";
import { H1, InfoElement } from "../styled-components/GameInfoSection";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
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
    <InfoElement onClick={() => setStop(true)}>
      <H1>Time = </H1> {(minutes < 10 && "0" + minutes) || minutes} : {(seconds < 10 && "0" + seconds) || seconds}
    </InfoElement>
  );
};

export default Timer;
