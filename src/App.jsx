import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reaction from "./pages/games/Reaction";

import NotFound from "./components/error/NotFound";
import NumberMemory from "./pages/games/NumberMemory";
import AimTrainer from "./pages/games/AimTrainer";
import VerbalMemory from "./pages/games/VerbalMemory";
import Typing from "./pages/games/Typing";
import VisualMemory from "./pages/games/VisualMemory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="reaction" element={<Reaction />} />
          <Route path="numberMemory" element={<NumberMemory />} />
          <Route path="aimTrainer" element={<AimTrainer />} />
          <Route path="verbalMemory" element={<VerbalMemory />} />
          <Route path="typing" element={<Typing />} />
          <Route path="visualMemory" element={<VisualMemory />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
