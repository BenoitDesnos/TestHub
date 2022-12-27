import React, { useContext, useEffect, useState } from "react";
import { VisualMemoryContext } from "../VisualMemoryContext";
import { Config } from "../config/config";
import Board from "../board/Board";

function VisualMemoryPlayingState() {
  const { gameState } = useContext(VisualMemoryContext);
  const [restartGame, setRestartGame] = useState(false);

  const getConfigFromLevel = (level) => {
    return Config[level - 1];
  };

  useEffect(() => {
    setRestartGame(true);
    const restartTimer = setTimeout(() => {
      setRestartGame(false);
    }, 1000);

    return () => {
      clearTimeout(restartTimer);
    };
  }, [gameState.lives]);

  return (
    <div>
      <Board
        rowLength={getConfigFromLevel(gameState.level).row}
        cellsToFind={getConfigFromLevel(gameState.level).cellsToFind}
        restartGame={restartGame}
      />
    </div>
  );
}

export default VisualMemoryPlayingState;
