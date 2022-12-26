import React from "react";
import LivesRow from "../lives/LivesRow";
import BoardRow from "./BoardRow";

function Board({ rowLength }) {
  const constructBoardRows = (rowLength) => {
    const row = [];
    for (let i = 0; i < rowLength; i++) {
      row.push(<BoardRow key={i} rowLength={rowLength} />);
    }
    return row;
  };

  return (
    <article className="board__container">
      <div className="vm__header">
        <h2>Level 1</h2>
        <LivesRow livesMax={3} currentLives={1} />
      </div>
      <div className="board__content">{constructBoardRows(rowLength)}</div>
    </article>
  );
}

export default Board;
