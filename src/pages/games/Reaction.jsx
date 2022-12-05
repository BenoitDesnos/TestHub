import ReactionTest from "../../components/games/Reaction/ReactionTest";
import BestScore from "../../components/BestScore";
import { useEffect, useState } from "react";

function Reaction() {
  const [best, setBest] = useState();

  useEffect(() => {
    if (localStorage.getItem("savedAverage")) {
      let storedResults = JSON.parse(localStorage.getItem("savedAverage"));
      setBest(Math.min(...storedResults));
    }
  }, []);

  return (
    <>
      <ReactionTest setBest={setBest} />
      <BestScore
        message={best ? `Your best score is : ${best} ms.` : undefined}
      />
    </>
  );
}

export default Reaction;
