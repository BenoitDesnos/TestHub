import React, { useContext, useState, useEffect } from "react";
import { NumberMemoryContext } from "../NumberMemoryContext";
import { getRandomNumberInRange } from "../numberMemoryTool";
import ProgressBar from "../ProgressBar";

function NumberMemoryStartGameState() {
  const { gameState, setGameState } = useContext(NumberMemoryContext);
  const scaleTimeWithLevel = (initialTime, level, percentage) => {
    return initialTime + ((initialTime * level) / 100) * percentage - level;
  };
  const scaleTimePercent = 25;
  const timerBeforeStart = scaleTimeWithLevel(
    2000,
    gameState.level - 1,
    scaleTimePercent
  ); //in milliseconds + percentage of time to wait before starting the game
  const [currentTimer, setCurrentTimer] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(null);

  const startGame = () => {
    setGameState((prevState) => {
      return { ...prevState, state: "playing", numberToFind: currentNumber };
    });
  };

  useEffect(() => {
    setCurrentNumber(getRandomNumberInRange(gameState.level));

    const timerTick = setInterval(() => {
      setCurrentTimer((prevTimer) => prevTimer + 100);
    }, 100);

    return () => {
      clearInterval(timerTick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentTimer >= timerBeforeStart) {
      startGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTimer]);

  const getFilledPercentage = () => {
    return (currentTimer / timerBeforeStart) * 100;
  };

  return (
    <div className="numbermemory__start--wrapper">
      <h2 className="numbermemory__initial--title numbermemory__bignumber">
        {currentNumber}
      </h2>
      <ProgressBar filled={getFilledPercentage()} />
    </div>
  );
}

export default NumberMemoryStartGameState;
