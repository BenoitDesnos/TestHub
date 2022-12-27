import React, { useContext } from "react";
import { VisualMemoryContext } from "../../visualMemory/VisualMemoryContext";

function VisualMemoryInitialState() {
  const { setGameState } = useContext(VisualMemoryContext);

  const handleStartGame = () => {
    setGameState((prevState) => {
      return { ...prevState, state: "playing", level: 10 };
    });
  };

  return (
    <div>
      <div className="numbermemory__hero--wrapper">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="numbermemory__hero--icon"
        >
          <rect width="58" height="58" rx="10" fill="white"></rect>
          <rect x="70" width="58" height="58" rx="10" fill="white"></rect>
          <rect y="70" width="58" height="58" rx="10" fill="white"></rect>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <h1 className="numbermemory__initial--title">Visual Memory Test</h1>
      <h2 className="numbermemory__subtitle">Memorise les carrés.</h2>
      <button
        onClick={() => handleStartGame()}
        className="numbermemory__button--cta"
      >
        Commencer
      </button>
    </div>
  );
}

export default VisualMemoryInitialState;
