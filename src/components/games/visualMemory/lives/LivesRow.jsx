import React from "react";
import LivesItem from "./LivesItem";

function LivesRow({ livesMax, currentLives }) {
  const makeLives = () => {
    const livesArray = [];
    for (let i = 0; i < livesMax; i++) {
      const makeThisLiveActive = currentLives > i;
      livesArray.push(<LivesItem key={i} isActive={makeThisLiveActive} />);
    }
    return livesArray;
  };
  return <aside className="lives__row">Lives : {makeLives()}</aside>;
}

export default LivesRow;
