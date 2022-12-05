import { useState } from "react";
function AimTrainerTest({ setBest }) {
  const [testState, setTestState] = useState("start");
  const [firstClick, setFirstClick] = useState(0);
  const [secondClick, setSecondClick] = useState(0);
  const [attempt, setAttempt] = useState(30);
  const [isSoundOn, setIsSoundOn] = useState(true);
  let success = new Audio("/audio/clickSoundSuccess.wav");
  let error = new Audio("/audio/clickSoundError.wav");
  const successClick = (e) => {
    if (isSoundOn) {
      success.play();
      e.stopPropagation();
    }
  };
  const errorClick = () => {
    if (isSoundOn) {
      error.play();
    }
  };

  function handletestState(e) {
    if (attempt > 1) {
      switch (testState) {
        case "start":
          setFirstClick(e.timeStamp);
          setTestState("play");
          targetPositionGenerator();
          break;
        case "play":
          setAttempt(attempt - 1);
          break;
        case "ended":
          break;
        default:
          break;
      }
    } else {
      setSecondClick(e.timeStamp);
      setTestState("ended");
      setAttempt(30);
    }
  }

  function targetPositionGenerator() {
    let randomX = Number((Math.random() * 80 + 10).toFixed(0));
    let randomY = Number((Math.random() * 80 + 10).toFixed(0));
    const target = document.querySelector(".fa-bullseye");
    target.style.left = `${randomX}%`;
    target.style.top = `${randomY}%`;
    console.log(randomX, randomY);
  }

  function averageResult() {
    let total = secondClick - firstClick;
    let totalAverage = total / attempt;
    let totalAvgRounded = Number(totalAverage.toFixed(0));
    return totalAvgRounded;
  }

  function saveResults() {
    let storedResults = JSON.parse(localStorage.getItem("bestAim"));
    if (localStorage.getItem("bestAim")) {
      storedResults.push(averageResult());
    } else {
      storedResults = [];
      storedResults.push(averageResult());
    }
    setBest(Math.min(...storedResults));
    let stringifiedStoredResults = JSON.stringify(storedResults);
    localStorage.setItem("bestAim", stringifiedStoredResults);
    resetGame();
  }
  function resetGame() {
    setTestState("start");
    setAttempt(30);
  }

  return (
    <section className="aim">
      {testState === "start" ? (
        <div className="aim__text">
          <h1 className="aim__text__title">Aim Trainer</h1>
          <i
            className="fa-solid fa-bullseye"
            onClick={(e) => {
              handletestState(e);
              targetPositionGenerator();
              successClick(e);
            }}
          ></i>
          <div className="aim__text__paragraph">
            <p>Hit {attempt} targets as quickly as you can.</p>
            <p>Click the target above to begin</p>
          </div>
          {isSoundOn ? (
            <i
              className="fa-solid fa-volume-high aim__text__volume"
              onClick={() => setIsSoundOn(!isSoundOn)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-volume-xmark aim__text__volume aim__text__volume--off"
              onClick={() => setIsSoundOn(!isSoundOn)}
            ></i>
          )}
        </div>
      ) : testState === "play" ? (
        <div className="aim__text" onClick={() => errorClick()}>
          <h3 className="aim__text__count">Cibles restantes {attempt}</h3>
          <i
            className="fa-solid fa-bullseye absolute"
            onClick={(e) => {
              handletestState(e);
              targetPositionGenerator();
              successClick(e);
            }}
          ></i>
          {isSoundOn ? (
            <i
              className="fa-solid fa-volume-high aim__text__volume"
              onClick={() => setIsSoundOn(!isSoundOn)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-volume-xmark aim__text__volume aim__text__volume--off"
              onClick={() => setIsSoundOn(!isSoundOn)}
            ></i>
          )}
        </div>
      ) : testState === "ended" ? (
        <div className="aim__text">
          <i className="fa-solid fa-bullseye"></i>
          <p className="aim__text__average">Temps moyen par cible</p>
          <h1 className="aim__text__title">{averageResult()} ms</h1>
          <p className="aim__text__paragraph">
            Sauvegarde ton score pour te vanter
          </p>
          <div className="aim__text__buttons">
            <button className="save" onClick={() => saveResults()}>
              Save score
            </button>
            <button className="again" onClick={() => resetGame()}>
              Try again
            </button>
          </div>
          {isSoundOn ? (
            <i
              className="fa-solid fa-volume-high aim__text__volume"
              onClick={() => setIsSoundOn(!isSoundOn)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-volume-xmark aim__text__volume aim__text__volume--off"
              onClick={() => setIsSoundOn(!isSoundOn)}
            ></i>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default AimTrainerTest;
