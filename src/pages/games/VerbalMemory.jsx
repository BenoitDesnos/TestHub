import React from "react";
import VerbalMemoryProvider from "../../components/games/verbalMemory/VerbalMemoryContext";
import VerbalMemoryTest from "../../components/games/verbalMemory/VerbalMemoryTest";

function VerbalMemory() {
  return (
    <VerbalMemoryProvider>
      <VerbalMemoryTest />
    </VerbalMemoryProvider>
  );
}

export default VerbalMemory;
