import TypingTest from "../../components/games/typing/TypingTest";
import BestScore from "../../components/BestScore";
import React, { useEffect, useState } from "react";

function Typing() {
  const [best, setBest] = useState();

  useEffect(() => {
    if (localStorage.getItem("bestTyping")) {
      let storedResults = JSON.parse(localStorage.getItem("bestTyping"));
      setBest(Math.max(...storedResults));
    }
  }, []);

  return (
    <>
      <TypingTest setBest={setBest} />
      <BestScore
        message={best ? `Your best score is : ${best} MPS.` : undefined}
      />
    </>
  );
}

export default Typing;
