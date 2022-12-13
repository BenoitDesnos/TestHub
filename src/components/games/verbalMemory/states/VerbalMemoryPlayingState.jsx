import React, { useContext, useEffect, useState } from "react";
import {
  getRandomBoolean,
  pickNewWord,
  pickRandomWordInTheSeenList,
} from "../verbalMemoryTools";
import { VerbalMemoryContext } from "../VerbalMemoryContext";

function VerbalMemoryPlayingState() {
  const newWordProbability = 0.55;
  const { setGameState, gameState } = useContext(VerbalMemoryContext);
  const [itsNewWord, setItsNewWord] = useState(false);

  const [word, setWord] = useState("");

  const generateNewWord = () => {
    console.log("generateNewWord");
    let newWord = pickNewWord(5);
    let updatedWordSeen = gameState.wordSeen;
    updatedWordSeen.push(newWord);
    setGameState((prevState) => {
      return {
        ...prevState,
        wordSeen: updatedWordSeen,
      };
    });

    setWord(newWord);
    setItsNewWord(true);
  };

  const getWord = () => {
    const randomBoolean = getRandomBoolean(newWordProbability);

    if (gameState.wordSeen.length === 0 || gameState.score === 0) {
      generateNewWord();
      return true;
    }

    if (!randomBoolean || gameState.wordSeen.length === 0) {
      generateNewWord();
      return true;
    } else {
      let newWord = pickRandomWordInTheSeenList(gameState.wordSeen);

      if (newWord === false) {
        generateNewWord();
      } else {
        setWord(newWord);
        setItsNewWord(false);
      }
      return true;
    }
  };

  const checkEndGame = () => {
    if (gameState.lives === 0) {
      setGameState((prevState) => {
        return {
          ...prevState,
          state: "endGame",
        };
      });
    }
  };

  //Generate a new word on first render
  let isFirstRender = true;
  useEffect(() => {
    if (isFirstRender) {
      getWord();
      isFirstRender = false;
    }
  }, []);

  const handleSeen = (e) => {
    e.preventDefault();
    console.log(gameState.wordSeen);
    if (!itsNewWord) {
      setGameState((prevState) => {
        return {
          ...prevState,
          score: prevState.score + 1,
        };
      });
    } else {
      setGameState((prevState) => {
        return {
          ...prevState,
          lives: prevState.lives - 1,
        };
      });
    }
    checkEndGame();
    getWord();
  };

  const handleNew = (e) => {
    e.preventDefault();
    if (itsNewWord) {
      setGameState((prevState) => {
        return {
          ...prevState,
          score: prevState.score + 1,
        };
      });
    } else {
      setGameState((prevState) => {
        return {
          ...prevState,
          lives: prevState.lives - 1,
        };
      });
    }
    checkEndGame();
    getWord();
  };

  return (
    <form className="numbermemory__form">
      <div className="verbalmemory__row">
        <p className="verbalmemory__faint--label ">
          Lives | <span className="verbalmemory__stat">{gameState.lives}</span>
        </p>
        <p className="verbalmemory__faint--label ">
          Score | <span className="verbalmemory__stat">{gameState.score}</span>
        </p>
      </div>

      <h2 className="verbalmemory__subtitle">{word}</h2>
      <div className="verbalmemory__row">
        <input
          type="submit"
          value="SEEN"
          className="numbermemory__button--cta"
          onClick={handleSeen}
        />
        <input
          type="submit"
          value="NEW"
          className="numbermemory__button--cta"
          onClick={handleNew}
        />
      </div>
    </form>
  );
}

export default VerbalMemoryPlayingState;
