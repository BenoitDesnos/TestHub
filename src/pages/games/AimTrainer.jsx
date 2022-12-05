import BestScore from "../../components/BestScore";
import { useEffect, useState } from "react";
import AimTrainerTest from "../../components/games/aimTrainer/AimTrainerTest";

function AimTrainer() {
  const [best, setBest] = useState();

  useEffect(() => {
    if (localStorage.getItem("bestAim")) {
      let storedResults = JSON.parse(localStorage.getItem("bestAim"));
      setBest(Math.min(...storedResults));
    }
  }, []);

  return (
    <>
      <AimTrainerTest setBest={setBest} />
      <BestScore
        message={best ? `Your best score is : ${best} ms.` : undefined}
      />
    </>
  );
}

export default AimTrainer;
