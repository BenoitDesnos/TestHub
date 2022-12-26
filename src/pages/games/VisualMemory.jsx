import React from "react";
import VisualMemoryProvider from "../../components/games/visualMemory/VisualMemoryContext";
import VisualMemoryTest from "../../components/games/visualMemory/VisualMemoryTest";

function VisualMemory() {
  return (
    <VisualMemoryProvider>
      <VisualMemoryTest />
    </VisualMemoryProvider>
  );
}

export default VisualMemory;
