import Navigation from "../../components/Navigation";
import ReactionTest from "../../components/games/ReactionTest";
import GameChoice from "./../../components/GameChoice";
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
    <main className="home">
      <header>
        <Navigation />
      </header>
      <ReactionTest setBest={setBest} />
      <BestScore best={best} />
      <GameChoice />
    </main>
  );
}

export default Reaction;
