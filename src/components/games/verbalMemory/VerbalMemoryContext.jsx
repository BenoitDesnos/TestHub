import React, { createContext, useState } from "react";

export const VerbalMemoryContext = createContext();

const VerbalMemoryProvider = (props) => {
  const [gameState, setGameState] = useState({
    state: "initial",
    lives: 3,
    score: 0,
    bestScore: localStorage.getItem("savedVerbalMemory") || 0,
    wordSeen: [],
  });

  return (
    <VerbalMemoryContext.Provider value={{ gameState, setGameState }}>
      {props.children}
    </VerbalMemoryContext.Provider>
  );
};

export default VerbalMemoryProvider;
