import React from "react";
import BoardCell from "./BoardCell";

function BoardRow({ rowLength }) {
  const makeRow = (rowLength) => {
    const row = [];
    for (let i = 0; i < rowLength; i++) {
      row.push(<BoardCell key={i} />);
    }
    return row;
  };

  return <div className="board__row">{makeRow(rowLength)}</div>;
}

export default BoardRow;
