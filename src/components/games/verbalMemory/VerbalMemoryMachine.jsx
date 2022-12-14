import React, { useContext } from "react";
import VerbalMemoryEndGameState from "./states/VerbalMemoryEndGameState";
import VerbalMemoryInitialState from "./states/VerbalMemoryInitialState";
import VerbalMemoryPlayingState from "./states/VerbalMemoryPlayingState";
import { VerbalMemoryContext } from "./VerbalMemoryContext";

function VerbalMemoryContent() {
  const { gameState } = useContext(VerbalMemoryContext);
  return (
    <div className="numbermemory__container">
      {gameState.state === "initial" ? (
        <VerbalMemoryInitialState />
      ) : gameState.state === "playing" ? (
        <VerbalMemoryPlayingState />
      ) : gameState.state === "endGame" ? (
        <VerbalMemoryEndGameState />
      ) : null}
    </div>
  );
}

export default VerbalMemoryContent;
