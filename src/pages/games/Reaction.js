import ReactionTest from "../../components/games/ReactionTest";
import BestScore from "./../../components/BestScore";
import { useEffect, useState } from "react";

function Reaction() {
  const [best, setBest] = useState();

  useEffect(() => {
    if (localStorage.key("savedAverage")) {
      let storedResults = JSON.parse(localStorage.getItem("savedAverage"));
      setBest(Math.min(...storedResults));
    }
  }, []);

  return (
    <>
      <ReactionTest setBest={setBest} />
      <BestScore best={best} />
    </>
  );
}

export default Reaction;
