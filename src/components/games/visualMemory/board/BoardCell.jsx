import React, { useState, useContext, useEffect } from "react";
import { randInt } from "three/src/math/MathUtils";
import { VisualMemoryContext } from "../VisualMemoryContext";

function BoardCell({ callRestartEvent, callRefreshEvent }) {
  const { setGameState, gameState } = useContext(VisualMemoryContext);
  const [isActive, setIsActive] = useState(false);
  const [showCell, setShowCell] = useState(false);
  const [cellDiscover, setCellDiscover] = useState(false);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    let showTimer = null;
    let unshowTimer = null;

    if (!isFound) {
      showTimer = setTimeout(() => {
        setShowCell(true);
      }, 2500);

      unshowTimer = setTimeout(() => {
        setShowCell(false);
      }, 6000);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(unshowTimer);
    };
  }, []);

  const tryToActivate = (timer) => {
    if (gameState.restCellsToActivate > 0) {
      const randomActivation = randInt(0, 4);
      if (randomActivation === 1) {
        setIsActive(true);
        setGameState((prevState) => {
          return {
            ...prevState,
            restCellsToActivate: prevState.restCellsToActivate - 1,
            cellsToFinds: prevState.cellsToFinds + 1,
          };
        });
        clearInterval(timer);
      }
    } else {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    const activationTimer = setInterval(() => {
      tryToActivate(activationTimer);
    }, 1500);

    return () => {
      clearInterval(activationTimer);
    };
  }, [gameState.restCellsToActivate]);

  const handleCellClick = () => {
    if (cellDiscover) return;
    setCellDiscover(true);
    setShowCell(!showCell);
    setIsFound(true);

    if (isActive) {
      setGameState((prevState) => {
        return {
          ...prevState,
          cellsFound: prevState.cellsFound + 1,
        };
      });
      callRefreshEvent();
    } else {
      if (gameState.fails < 2) {
        setGameState((prevState) => {
          return {
            ...prevState,
            fails: prevState.fails + 1,
          };
        });
      } else if (gameState.lives === 1) {
        setGameState((prevState) => {
          return {
            ...prevState,
            state: "endGame",
            cellsFound: 0,
            cellsToFinds: 0,
            bestScore:
              prevState.score > prevState.bestScore
                ? prevState.score
                : prevState.bestScore,
          };
        });
      } else {
        setGameState((prevState) => {
          return {
            ...prevState,
            state: "playing",
            fails: 0,
            lives: prevState.lives - 1,
            cellsFound: 0,
            cellsToFinds: 0,
          };
        });
        callRestartEvent();
      }
    }
  };

  return (
    <div
      className={`cell__base ${
        showCell
          ? isActive
            ? "cell__rotate cell__activeColor"
            : "cell__rotate cell__wrongColor"
          : "cell__unshowRotate"
      }`}
      onClick={() => {
        handleCellClick();
      }}
    ></div>
  );
}

export default BoardCell;
