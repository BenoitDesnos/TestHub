import React from "react";
import { useEffect } from "react";

const Timer = ({ seconds, setSeconds, minutes, setMinutes }) => {
  const timer = () => {
    if (seconds < 60) {
      setSeconds((current) => current + 1);
    } else if (seconds >= 60) {
      setSeconds(0);
      setMinutes((current) => current + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => timer(), 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="timer">
      <span className="timer__minutes">
        {minutes < 10 ? "0" + minutes : minutes}
      </span>{" "}
      :{" "}
      <span className="timer__seconds">
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    </div>
  );
};

export default Timer;
