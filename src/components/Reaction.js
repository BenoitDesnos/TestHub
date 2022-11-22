import { useEffect, useRef, useState } from "react";
function Reaction() {
  const [testState, setTestState] = useState("start");
  const [firstClick, setFirstClick] = useState(0);
  const [secondClick, setSecondClick] = useState(0);
  const [timeOutGenerator, setTimeOutGenerator] = useState(0);
  const [result, setResult] = useState(0);
  const myTimeOut = useRef(null);

  function handletestState(e) {
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
      case "ended":
        setResult(Number(result.toFixed(2)));
        break;
      default:
        setTestState("start");
        break;
    }
  }

  // this useEffect is used to be able to use timeOutGenerator in setTimeout while in case "await"
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
      let reflexeRounded = Number(reflexeTime.toFixed(2));
      setResult(reflexeRounded);
      setTestState("ended");
    }
    return () => {
      clearTimeout(myTimeOut.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondClick]);

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
          : testState === "ended"
          ? "reaction ended"
          : "reaction"
      }
      onMouseDown={(e) => handletestState(e)}
    >
      {testState === "start" ? (
        <h1 className="reaction__title">Reaction Time Test</h1>
      ) : testState === "await" ? (
        <h1 className="reaction__title">Wait for Green</h1>
      ) : testState === "error" ? (
        <h1 className="reaction__title">Too soon..</h1>
      ) : testState === "react" ? (
        <h1 className="reaction__title">Click !</h1>
      ) : testState === "ended" ? (
        <h1 className="reaction__title">Your result is {result} ms</h1>
      ) : (
        <h1 className="reaction__title">Reaction Time Test</h1>
      )}
    </div>
  );
}

export default Reaction;
