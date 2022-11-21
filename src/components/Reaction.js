import { useEffect, useState } from "react";
function Reaction() {
  const [color, setColor] = useState(1);
  const [firstClick, setFirstClick] = useState(0);
  const [secondClick, setSecondClick] = useState(0);
  const [timeOutGenerator, setTimeOutGenerator] = useState(0);
  const [myTimeOut, setMyTimeOut] = useState(0);

  useEffect(() => {
    if (timeOutGenerator !== 0) {
      setTimeout(() => {
        setColor(4);
      }, timeOutGenerator);
    }
  }, [timeOutGenerator]);

  function handleColorState(e) {
    switch (color) {
      case 1:
        setFirstClick(e.timeStamp);
        setTimeOutGenerator(Math.random() * 3500 + 1500);
        setColor(2);
        break;
      case 2:
        console.log(timeOutGenerator);
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;

      default:
        break;
    }
  }

  return (
    <div
      className={
        color === 1
          ? "reaction"
          : color === 2
          ? "reaction await"
          : color === 3
          ? "reaction error"
          : color === 4
          ? "reaction is-active"
          : color === 5
          ? "reaction success "
          : "reaction"
      }
      onMouseDown={(e) => handleColorState(e)}
    >
      <h1 className="reaction__title">Reaction Time Test</h1>
    </div>
  );
}

export default Reaction;
