import React, { useState } from "react";
import { useEffect } from "react";
import { ParagraphList } from "./data/ParagraphList";

function typingTrainerTest(/* { setBest } */) {
  /*   const [testState, setTestState] = useState("start"); */
  const testState = "start";
  const [Paragraph, setParagraph] = useState([]);
  const [count, setCount] = useState(0);

  function choseParagraph() {
    let random = Number((Math.random() * ParagraphList.length).toFixed(0));
    setParagraph(ParagraphList[random].split(""));
  }
  useEffect(() => {
    choseParagraph();
  }, []);

  const handleKeyDown = (e) => {
    checkValidity(e.key, e);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [Paragraph, count]);

  function checkValidity(key, e) {
    const letters = document.querySelectorAll(".await");
    console.log(Paragraph[count], key, letters[count]);
    switch (key) {
      case "Shift":
        break;
      case "CapsLock":
        break;
      case "AltGraph":
        break;
      case " ":
        if (key === Paragraph[count]) {
          setCount((count) => count + 1);
          letters[count].classList.add("success");
        } else {
          setCount((count) => count + 1);
          letters[count].classList.add("error");
        }
        e.preventDefault();
        break;
      case "Backspace":
        setCount((count) => count - 1);
        letters[count - 1].classList.remove("error");
        letters[count - 1].classList.remove("success");
        break;
      case Paragraph[count]:
        setCount((count) => count + 1);
        letters[count].classList.add("success");
        break;

      default:
        console.log("test");
        setCount((count) => count + 1);
        letters[count].classList.add("error");
        break;
    }
  }

  /*   function adjustCount(amount) {
    setCount((currentCount) => {
      return currentCount + amount;
    });
    console.log(count);
  } */

  /*    function handletestState(e) {   
      switch (testState) {
        case "start":          
          break;
        case "play":          
          break;
        case "ended":
          break;
        default:
          break;
      }
    }  */

  /*  function averageResult() {
    let total = secondClick - firstClick;
    let totalAverage = total / attempt;
    let totalAvgRounded = Number(totalAverage.toFixed(0));
    return totalAvgRounded;
  } */

  /*  function saveResults() {
    let storedResults = JSON.parse(localStorage.getItem("besttyping"));
    if (localStorage.getItem("besttyping")) {
      storedResults.push(averageResult());
    } else {
      storedResults = [];
      storedResults.push(averageResult());
    }
    setBest(Math.min(...storedResults));
    let stringifiedStoredResults = JSON.stringify(storedResults);
    localStorage.setItem("besttyping", stringifiedStoredResults);
    resetGame();
  }
  function resetGame() {
    setTestState("start");
    setAttempt(30);
  } */

  return (
    <section className="typing">
      {testState === "start" ? (
        <div className="typing__text">
          <h1 className="typing__text__title">Typing Test {count}</h1>
          <div className="typing__text__paragraph">
            <p>Combien de mots par minute peux-tu écrire?</p>
          </div>
          <div className="typing__text__game">
            {Paragraph.map((input, index) => (
              <span key={input + index} className="await">
                {input}
              </span>
            ))}
          </div>
          <p>Commence à écrire pour débuter</p>
        </div>
      ) : testState === "play" ? (
        <div className="typing__text">
          <h1 className="typing__text__title">Typing Test</h1>
          <div className="typing__text__paragraph">
            <p>Combien de mots par minute peux-tu écrire?</p>
          </div>
          <div className="typing__text__game">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              amet, tempora, distinctio reiciendis est natus nemo repellat cum
              consequatur laborum, porro unde numquam eaque assumenda officiis
              odit quidem esse sint mollitia recusandae. Dicta rerum mollitia
              exercitationem hic nulla repellat laudantium, voluptate, animi
              impedit velit suscipit minima perspiciatis corporis, nam facere.
            </p>
          </div>
          <p>Commence à écrire pour débuter</p>
        </div>
      ) : testState === "ended" ? (
        <div className="typing__text">
          <h1 className="typing__text__title">Typing Test</h1>
          <div className="typing__text__paragraph">
            <p>Combien de mots par minute peux-tu écrire?</p>
          </div>
          <div className="typing__text__game">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              amet, tempora, distinctio reiciendis est natus nemo repellat cum
              consequatur laborum, porro unde numquam eaque assumenda officiis
              odit quidem esse sint mollitia recusandae. Dicta rerum mollitia
              exercitationem hic nulla repellat laudantium, voluptate, animi
              impedit velit suscipit minima perspiciatis corporis, nam facere.
            </p>
          </div>
          <p>Commence à écrire pour débuter</p>
        </div>
      ) : null}
    </section>
  );
}

export default typingTrainerTest;
