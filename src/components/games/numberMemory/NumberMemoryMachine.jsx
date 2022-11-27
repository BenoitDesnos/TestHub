import React, { useContext } from "react";
import { NumberMemoryContext } from "./NumberMemoryContext";
import NumberMemoryEndGameState from "./states/NumberMemoryEndGameState";
import NumberMemoryInitialState from "./states/NumberMemoryInitialState";
import NumberMemoryPlayingState from "./states/NumberMemoryPlayingState";
import NumberMemoryStartGameState from "./states/NumberMemoryStartGameState";

function NumberMemoryContent() {
  const { gameState } = useContext(NumberMemoryContext);
  return (
    <div className="numbermemory__container">
      {gameState.state === "initial" ? (
        <NumberMemoryInitialState />
      ) : gameState.state === "start" ? (
        <NumberMemoryStartGameState />
      ) : gameState.state === "playing" ? (
        <NumberMemoryPlayingState />
      ) : gameState.state === "endGame" ? (
        <NumberMemoryEndGameState />
      ) : null}
    </div>
  );
}

export default NumberMemoryContent;
