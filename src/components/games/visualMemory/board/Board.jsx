import React, { useContext, useState, useEffect } from "react";
import { VisualMemoryContext } from "../VisualMemoryContext";
import LivesRow from "../lives/LivesRow";
import BoardRow from "./BoardRow";

function Board({ rowLength, cellsToFind, restartGame }) {
  const { setGameState, gameState } = useContext(VisualMemoryContext);
  const [restarGame, setRestartGame] = useState(restartGame);
  const [refreshCounter, setRefreshCounter] = useState(false);

  const callRestartEvent = () => {
    setRestartGame(true);
  };

  const callRefreshEvent = () => {
    setRefreshCounter((prevState) => !prevState);
  };

  const constructBoardRows = (rowLength) => {
    const row = [];
    for (let i = 0; i < rowLength; i++) {
      row.push(
        <BoardRow
          key={i}
          rowLength={rowLength}
          callRestartEvent={callRestartEvent}
          callRefreshEvent={callRefreshEvent}
        />
      );
    }
    return row;
  };

  useEffect(() => {
    setGameState((prevState) => {
      return {
        ...prevState,
        restCellsToActivate: cellsToFind,
        cellsFound: 0,
      };
    });
    setRestartGame(false);
  }, [restarGame]);

  useEffect(() => {
    if (
      gameState.cellsFound === gameState.cellsToFinds &&
      gameState.cellsToFinds > 0
    ) {
      setGameState((prevState) => {
        return {
          ...prevState,
          level: prevState.level + 1,
          cellsToFinds: 0,
          cellsFound: 0,
        };
      });
      callRestartEvent();
    }
  }, [refreshCounter]);

  return (
    <article className="board__container">
      <div className="vm__header">
        <h2>
          <span className="level__title">Level</span> {gameState.level}
        </h2>
        <LivesRow livesMax={3} currentLives={gameState.lives} />
      </div>
      <div className="board__content">
        {restarGame ? null : constructBoardRows(rowLength)}
      </div>
    </article>
  );
}

export default Board;
