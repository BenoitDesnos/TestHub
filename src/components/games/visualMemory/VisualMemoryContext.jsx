import React, { createContext, useState } from "react";

export const VisualMemoryContext = createContext();

const VisualMemoryProvider = (props) => {
  const [gameState, setGameState] = useState({
    state: "initial",
    level: 1,
    fails: 0,
    lives: 3,
    score: 0,
    bestScore: localStorage.getItem("savedVisualMemory") || 0,
    restCellsToActivate: 0,
    cellsFound: 0,
    cellsToFinds: 0,
  });

  return (
    <VisualMemoryContext.Provider value={{ gameState, setGameState }}>
      {props.children}
    </VisualMemoryContext.Provider>
  );
};

export default VisualMemoryProvider;
