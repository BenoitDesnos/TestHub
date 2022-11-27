import React from "react";
import NumberMemoryMachine from "./NumberMemoryMachine";
import NumberMemoryProvider from "./NumberMemoryContext";

function NumberMemory() {
  return (
    <section>
      <NumberMemoryProvider>
        <NumberMemoryMachine />
      </NumberMemoryProvider>
    </section>
  );
}

export default NumberMemory;
