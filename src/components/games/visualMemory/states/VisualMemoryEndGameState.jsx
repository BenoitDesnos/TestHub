import React, { useContext } from "react";
import { saveResults } from "../../../tools/saveTools";
import { VisualMemoryContext } from "../VisualMemoryContext";

function VisualMemoryEndGameState() {
  const { gameState, setGameState } = useContext(VisualMemoryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameState((prevState) => {
      return {
        ...prevState,
        state: "initial",
        lives: 3,
        score: 0,
        level: 1,
        fails: 0,
        restCellsToActivate: 0,
        cellsFound: 0,
        cellsToFinds: 0,
      };
    });
  };

  const handleSaveScore = () => {
    if (saveResults("savedVisualMemory", gameState.level)) {
      setGameState((prevState) => {
        return {
          ...prevState,
          bestScore: gameState.level,
        };
      });
    }
  };

  return (
    <div className={`numbermemory__animated--container`}>
      <p className="numbermemory__faint--label numbermemory__fadeitem">
        <svg
          width="80"
          height="80"
          viewBox="0 0 128 128"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
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
      </p>
      <h3 className={`verbalmemory__end--title numbermemory__fadeitem`}>
        Visual Memory
      </h3>
      <p className="verbalmemory__result numbermemory__fadeitem">
        Level {gameState.level}
      </p>
      <p className="numbermemory__message numbermemory__fadeitem">
        Enregistrez votre meilleur score pour pouvoir vous comparer.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="numbermemory__row numbermemory__fadeitem">
          <input
            type="button"
            value="Sauvegarder"
            onClick={() => {
              handleSaveScore();
            }}
            className="numbermemory__button--cta numbermemory__fadeitem"
          />
          <input
            type="submit"
            value="Rejouer"
            className="numbermemory__button--cta numbermemory__button--secondarycolor numbermemory__fadeitem"
          />
        </div>
      </form>
    </div>
  );
}

export default VisualMemoryEndGameState;
