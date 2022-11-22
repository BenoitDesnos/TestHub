import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reaction from "./pages/games/Reaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reaction" element={<Reaction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
