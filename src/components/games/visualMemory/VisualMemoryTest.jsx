import React, { useContext } from "react";
import { VisualMemoryContext } from "./VisualMemoryContext";
import BestScore from "../../BestScore";
import VisualMemoryContent from "./VisualMemoryMachine";

function VisualMemoryTest() {
  const { gameState } = useContext(VisualMemoryContext);
  return (
    <>
      <section>
        <VisualMemoryContent />
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

export default VisualMemoryTest;
