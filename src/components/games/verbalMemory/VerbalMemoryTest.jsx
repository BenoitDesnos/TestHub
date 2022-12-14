import React, { useContext } from "react";
import { VerbalMemoryContext } from "./VerbalMemoryContext";
import BestScore from "../../BestScore";
import VerbalMemoryContent from "./VerbalMemoryMachine";

function VerbalMemoryTest() {
  const { gameState } = useContext(VerbalMemoryContext);
  return (
    <>
      <section>
        <VerbalMemoryContent />
      </section>
      <BestScore
        message={
          gameState.bestScore
            ? `Meilleur score : ${gameState.bestScore}.`
            : undefined
        }
      />
    </>
  );
}

export default VerbalMemoryTest;
