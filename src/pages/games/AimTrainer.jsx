
/* import BestScore from "../../components/BestScore";
import { useEffect, useState } from "react"; */
import AimTrainerTest from '../../components/games/aimTrainer/AimTrainerTest';

function Reaction() {
/*   const [best, setBest] = useState();

  useEffect(() => {
    if (localStorage.key("savedAverage")) {
      let storedResults = JSON.parse(localStorage.getItem("savedAverage"));
      setBest(Math.min(...storedResults));
    }
  }, []); */

  return (
    <>
      <AimTrainerTest/>
     {/*  <BestScore
        message={best ? `Your best score is : ${best} ms.` : undefined}
      /> */}
    </>
  );
}

export default Reaction;