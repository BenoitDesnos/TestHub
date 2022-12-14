import React, { useContext, useRef } from "react";
import { NumberMemoryContext } from "../NumberMemoryContext";

function NumberMemoryPlayingState() {
  const { setGameState } = useContext(NumberMemoryContext);
  const numberInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberInput.current.value === "") return;

    setGameState((prevState) => {
      return {
        ...prevState,
        state: "endGame",
        answer: numberInput.current.value.toString(),
      };
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="numbermemory__form">
      <h2 className="numbermemory__subtitle">Quel était le nombre ?</h2>
      <p className="numbermemory__faint--label ">
        Appuyer sur entrer pour valider
      </p>
      <input
        ref={numberInput}
        type="text"
        name="numberInput"
        className="numbermemory__input"
      />
      <input
        type="submit"
        value="Valider"
        className="numbermemory__button--cta"
      />
    </form>
  );
}

export default NumberMemoryPlayingState;
