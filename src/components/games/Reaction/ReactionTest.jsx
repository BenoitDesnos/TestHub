import React, { useEffect, useRef, useState } from "react";
function Reaction({ setBest }) {
  const [testState, setTestState] = useState("start");
  const [firstClick, setFirstClick] = useState(0);
  const [secondClick, setSecondClick] = useState(0);
  const [timeOutGenerator, setTimeOutGenerator] = useState(0);
  const [result, setResult] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [results, setResults] = useState([]);
  const myTimeOut = useRef(null);

  function handletestState(e) {
    if (attempt < 5) {
      switch (testState) {
        case "start":
          setFirstClick(e.timeStamp);
          setTimeOutGenerator(Math.random() * 3500 + 1500);
          setTestState("await");
          break;
        case "await":
          setSecondClick(e.timeStamp);
          break;
        case "error":
          setFirstClick(e.timeStamp);
          setTimeOutGenerator(Math.random() * 3500 + 1500);
          setTestState("await");
          break;
        case "react":
          setSecondClick(e.timeStamp);
          break;
        case "result":
          setResult(Number(result.toFixed(2)));
          setTestState("await");
          setFirstClick(e.timeStamp);
          setTimeOutGenerator(Math.random() * 3500 + 1500);
          break;
        case "ended":
          break;
        default:
          setTestState("start");
          break;
      }
    } else {
      setTestState("ended");
    }
  }

  // this useEffect is used to be able to use timeOutGenerator in setTimeout while in case "await"
  useEffect(() => {
    if (result !== 0) {
      setResults((current) => [...current, result]);
    }
  }, [result]);
  useEffect(() => {
    if (timeOutGenerator !== 0) {
      myTimeOut.current = setTimeout(() => {
        setTestState("react");
      }, timeOutGenerator);
    }
  }, [timeOutGenerator]);

  // this useEffect is used when secondClick happens before completion of timeOut
  useEffect(() => {
    if (testState === "await") {
      setTestState("error");
    } else if (testState === "react") {
      let deltaClicks = secondClick - firstClick;
      let reflexeTime = deltaClicks - timeOutGenerator;
      let reflexeRounded = Number(reflexeTime.toFixed(0));
      setResult(reflexeRounded);
      setAttempt(attempt + 1);
      setTestState("result");
    }
    return () => {
      clearTimeout(myTimeOut.current);
    };
  }, [secondClick]);

  function averageResult() {
    let total = 0;
    results.forEach((result) => {
      total += result;
    });
    return total / 5;
  }

  function saveResults() {
    let storedResults = JSON.parse(localStorage.getItem("savedAverage"));
    if (localStorage.key("savedAverage")) {
      storedResults.push(averageResult());
    } else {
      storedResults = [];
      storedResults.push(averageResult());
    }
    setBest(Math.min(...storedResults));
    let stringifiedStoredResults = JSON.stringify(storedResults);
    localStorage.setItem("savedAverage", stringifiedStoredResults);
    resetGame();
  }

  function resetGame() {
    setTestState("start");
    setAttempt(0);
    setResults([]);
  }

  return (
    <div
      className={
        testState === "start"
          ? "reaction"
          : testState === "await"
          ? "reaction await"
          : testState === "error"
          ? "reaction error"
          : testState === "react"
          ? "reaction react"
          : testState === "result"
          ? "reaction result"
          : testState === "ended"
          ? "reaction ended"
          : "reaction"
      }
      onMouseDown={(e) => handletestState(e)}
    >
      {testState === "start" ? (
        <div className="reaction__text">
          <i className="fa-solid fa-bolt-lightning pulse"></i>
          <h1 className="reaction__text__title">Reaction Time Test</h1>
          <p className="reaction__text__paragraph">
            Quand la couleur devient verte, cliquez aussi vite que possible.
            <br />
            Cliquez n&apos;importe ou pour commencer.
          </p>
        </div>
      ) : testState === "await" ? (
        <div className="reaction__text">
          <i className="fa-solid fa-ellipsis "></i>
          <h1 className="reaction__text__title">Attendez le vert !</h1>
        </div>
      ) : testState === "error" ? (
        <h1 className="reaction__text__title">Trop tôt..</h1>
      ) : testState === "react" ? (
        <div className="reaction__text">
          <i className="fa-solid fa-ellipsis"></i>
          <h1 className="reaction__text__title">Clique !</h1>
        </div>
      ) : testState === "result" ? (
        <div className="reaction__text">
          <h1 className="reaction__text__title">{result} ms</h1>
          {attempt < 5 ? (
            <p className="reaction__text__paragraph">
              Click pour continuer, il te reste {5 - attempt} clique
              {attempt >= 4 ? "" : "s"}.
            </p>
          ) : (
            <p className="reaction__text__paragraph">
              Click pour voir ton score moyen.
            </p>
          )}
        </div>
      ) : testState === "ended" ? (
        <div className="reaction__text">
          <i className="fa-solid fa-bolt-lightning pulse"></i>
          <p className="reaction__text__average">Temps moyen</p>
          <h1 className="reaction__text__title">{averageResult()} ms</h1>
          <p className="reaction__text__paragraph">
            Sauvegarde ton score pour te vanter
          </p>
          <div className="reaction__text__buttons">
            <button className="save" onClick={() => saveResults()}>
              Save score
            </button>
            <button className="again" onClick={() => resetGame()}>
              Try again
            </button>
          </div>
        </div>
      ) : (
        <h2 className="reaction__text__title">Reaction Time Test</h2>
      )}
    </div>
  );
}

export default Reaction;
