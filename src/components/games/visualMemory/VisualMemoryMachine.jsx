import React, { useContext } from "react";
import VisualMemoryInitialState from "./states/VisualMemoryInitialState";
import VisualMemoryPlayingState from "./states/VisualMemoryPlayingState";
import { VisualMemoryContext } from "./VisualMemoryContext";

function VisualMemoryContent() {
  const { gameState } = useContext(VisualMemoryContext);
  return (
    <div className="numbermemory__container">
      {gameState.state === "initial" ? (
        <VisualMemoryInitialState />
      ) : gameState.state === "playing" ? (
        <VisualMemoryPlayingState />
      ) : gameState.state === "endGame" ? null : null}
    </div>
  );
}

export default VisualMemoryContent;
