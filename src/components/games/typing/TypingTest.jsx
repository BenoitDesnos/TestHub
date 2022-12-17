import React, { useState } from "react";
import { useEffect } from "react";
import { ParagraphList } from "./data/ParagraphList";
import StopWatch from "./StopWatch";

function typingTrainerTest({ setBest }) {
  const [testState, setTestState] = useState("start");

  const [Paragraph, setParagraph] = useState([]);
  const [count, setCount] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [errors, setErrors] = useState(0);

  function choseParagraph() {
    let random = Number((Math.random() * ParagraphList.length).toFixed(0));
    setParagraph(ParagraphList[random].split(""));
  }

  const handleKeyDown = (e) => {
    checkValidity(e.key, e);
  };
  const handleClick = () => {
    const letters = document.querySelectorAll(".typing__text__game > span");
    console.log(letters[count]);
    letters[count].classList.add("current");
  };

  const handleSuccess = (letters) => {
    setCount((count) => count + 1);
    letters[count].classList.add("success");
    handleCurrent(letters);
  };
  const handleCurrent = (letters) => {
    letters[count + 1].classList.add("current");
    letters[count].classList.remove("current");
  };
  const handleError = (letters) => {
    setCount((count) => count + 1);
    letters[count].classList.add("error");
    handleCurrent(letters);
    setErrors((current) => current + 1);
  };
  const handleDelete = (letters) => {
    let previousInputClass = letters[count - 1].className;
    if (previousInputClass === "error") {
      setErrors((current) => current - 1);
    }
    setCount((count) => count - 1);
    console.log(letters[count - 1].className);
    letters[count - 1].classList.remove("error");
    letters[count - 1].classList.remove("success");
    letters[count].classList.remove("current");
    letters[count - 1].classList.add("current");
  };

  function checkValidity(keyPressed, e) {
    const letters = document.querySelectorAll(".typing__text__game > span");
    if (
      keyPressed !== "Shift" &&
      keyPressed !== "CapsLock" &&
      keyPressed !== "Dead"
    ) {
      handletestState(letters);
    }
    const keyToMatch = Paragraph[count];
    console.log(Paragraph[count], keyPressed, letters[count]);
    switch (keyPressed) {
      case "Shift":
        break;
      case "CapsLock":
        break;
      case "AltGraph":
        break;
      case "Dead":
        break;
      case " ":
        if (keyPressed === keyToMatch) {
          handleSuccess(letters);
        } else {
          handleError(letters);
        }
        e.preventDefault();
        break;
      case "Backspace":
        handleDelete(letters);
        break;
      case keyToMatch:
        handleSuccess(letters);

        break;
      default:
        handleError(letters);
        break;
    }
  }

  useEffect(() => {
    choseParagraph();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [Paragraph, count]);

  function handletestState(letters) {
    switch (testState) {
      case "start":
        setTestState("play");
        break;
      case "play":
        letters.length - 1 === count ? setTestState("ended") : null;
        break;
      case "ended":
        calculWordPerMinute();
        break;
      default:
        break;
    }
  }

  const calculWordPerMinute = () => {
    let secondsInFraction = (1 * seconds) / 60;

    let nbrOfWords = count / 6;
    let total = nbrOfWords / (minutes + secondsInFraction + errors / 60);

    if (total > 5000 || isNaN(total)) {
      return 65;
    } else if (total <= 0) {
      return 0;
    }
    return total.toFixed(0);
  };

  function saveResults() {
    let storedResults = JSON.parse(localStorage.getItem("bestTyping"));
    if (localStorage.getItem("bestTyping")) {
      storedResults.push(calculWordPerMinute());
    } else {
      storedResults = [];
      storedResults.push(calculWordPerMinute());
    }
    setBest(Math.max(...storedResults));
    let stringifiedStoredResults = JSON.stringify(storedResults);
    localStorage.setItem("bestTyping", stringifiedStoredResults);
    resetGame();
  }
  function resetGame() {
    setTestState("start");
    choseParagraph();
    setCount(0);
    setErrors(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <section className="typing">
      {testState === "start" ? (
        <div className="typing__text">
          <h1 className="typing__text__title">Typing Test</h1>
          <div className="typing__text__paragraph">
            <p>Combien de mots par minute peux-tu écrire?</p>
          </div>
          <div className="typing__text__game" onClick={() => handleClick()}>
            {Paragraph.map((letter, index) => (
              <span key={letter + index}>{letter}</span>
            ))}
          </div>
          <p>Commence à écrire pour débuter</p>
        </div>
      ) : testState === "play" ? (
        <div className="typing__text">
          <h1 className="typing__text__title">{calculWordPerMinute()}</h1>
          <div className="typing__text__paragraph">
            <p>Combien de mots par minute peux-tu écrire?{count}</p>
          </div>
          <div className="typing__text__game">
            {Paragraph.map((letter, index) => (
              <span key={letter + index}>{letter}</span>
            ))}
          </div>

          <StopWatch
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
          />
        </div>
      ) : testState === "ended" ? (
        <div className="typing__text">
          <i className="fa-solid fa-keyboard"></i>
          <p className="typing__text__average">Nombre de mots par secondes</p>
          <h1 className="typing__text__title">{calculWordPerMinute()} MPS</h1>
          <p className="typing__text__paragraph">
            Sauvegarde ton score pour te vanter
          </p>
          <div className="typing__text__buttons">
            <button className="save" onClick={() => saveResults()}>
              Save score
            </button>
            <button className="again" onClick={() => resetGame()}>
              Try again
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default typingTrainerTest;
