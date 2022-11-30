import React, { useContext } from "react";
import BestScore from "../../BestScore";
import { NumberMemoryContext } from "./NumberMemoryContext";
import NumberMemoryMachine from "./NumberMemoryMachine";

function NumberMemoryTest() {
  const { gameState } = useContext(NumberMemoryContext);

  return (
    <>
      <section>
        <NumberMemoryMachine />
      </section>
      <BestScore
        message={
          gameState.bestScore
            ? `Your best score is : ${gameState.bestScore}.`
            : undefined
        }
      />
    </>
  );
}

export default NumberMemoryTest;
