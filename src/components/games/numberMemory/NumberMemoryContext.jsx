import React, { createContext, useState } from "react";

export const NumberMemoryContext = createContext();

const NumberMemoryProvider = (props) => {
  const [gameState, setGameState] = useState({
    state: "initial",
    level: 0,
    score: 0,
    bestScore: localStorage.getItem("savedNumberMemory") || 0,
    numberToFind: null,
    answer: null,
  });

  return (
    <NumberMemoryContext.Provider value={{ gameState, setGameState }}>
      {props.children}
    </NumberMemoryContext.Provider>
  );
};

export default NumberMemoryProvider;
