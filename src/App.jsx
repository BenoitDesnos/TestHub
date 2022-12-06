import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reaction from "./pages/games/Reaction";

import NotFound from "./components/error/NotFound";
import NumberMemory from "./pages/games/NumberMemory";
import AimTrainer from "./pages/games/AimTrainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="reaction" element={<Reaction />} />
          <Route path="numberMemory" element={<NumberMemory />} />
          <Route path="aimTrainer" element={<AimTrainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
