import React, { useState } from "react";

function BoardCell() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`cell__neutral board__cell ${isActive ? "cell__active" : ""}`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    ></div>
  );
}

export default BoardCell;
