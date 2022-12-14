import React, { useContext, useEffect, useState } from "react";
import { saveResults } from "../../../tools/saveTools";
import { NumberMemoryContext } from "../NumberMemoryContext";

function NumberMemoryEndGameState() {
  const { gameState, setGameState } = useContext(NumberMemoryContext);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setIsCorrect(gameState.answer === gameState.numberToFind.toString());
  }, [gameState.answer, gameState.numberToFind]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCorrect) {
      setGameState((prevState) => {
        return {
          ...prevState,
          state: "start",
          level: prevState.level + 1,
          score: prevState.score + 1,
        };
      });
    } else {
      setGameState((prevState) => {
        return {
          ...prevState,
          state: "initial",
          level: 1,
          score: 0,
        };
      });
    }
  };

  const handleSaveScore = () => {
    if (saveResults("savedNumberMemory", gameState.score)) {
      setGameState((prevState) => {
        return {
          ...prevState,
          bestScore: gameState.score,
        };
      });
    }
  };

  return (
    <div
      className={`numbermemory__animated--container ${
        isCorrect
          ? "numbermemory__feedback--correct"
          : "numbermemory__feedback--wrong"
      }`}
    >
      <p className="numbermemory__faint--label numbermemory__label--bigsize numbermemory__fadeitem">
        Nombre à trouver
      </p>
      <h3 className="numbermemory__number numbermemory__fadeitem">
        {gameState.numberToFind}
      </h3>
      <p className="numbermemory__faint--label numbermemory__label--bigsize numbermemory__fadeitem">
        Votre réponse
      </p>
      <h3
        className={`numbermemory__number--answer numbermemory__fadeitem ${
          isCorrect
            ? "numbermemory__correct--answer"
            : "numbermemory__wrong--answer"
        }`}
      >
        {gameState.answer}
      </h3>
      <p className="numbermemory__number--level numbermemory__fadeitem">
        Niveau {gameState.level}
      </p>
      <p className="numbermemory__message numbermemory__fadeitem">
        Enregistrez votre meilleur score pour pouvoir vous comparer.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        {isCorrect ? (
          <input
            type="submit"
            value="Suivant"
            className="numbermemory__button--cta numbermemory__fadeitem"
          />
        ) : (
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
        )}
      </form>
    </div>
  );
}

export default NumberMemoryEndGameState;
