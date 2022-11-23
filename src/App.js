import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reaction from "./pages/games/Reaction";
import ReactionTest from "./components/games/ReactionTest";
import NotFound from "./components/error/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<ReactionTest />} />
          <Route path="reaction" element={<Reaction />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
