import React from "react";
import NumberMemoryProvider from "../../components/games/numberMemory/NumberMemoryContext";
import NumberMemoryTest from "../../components/games/numberMemory/NumberMemoryTest";

function NumberMemory() {
  return (
    <NumberMemoryProvider>
      <NumberMemoryTest />
    </NumberMemoryProvider>
  );
}

export default NumberMemory;
