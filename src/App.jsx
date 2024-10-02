import "./App.css";

import { Routes, Route } from "react-router-dom";

import Game from "./pages/Game";
import StartingPage from "./pages/StartingPage";

import "./fonts.css";

import Typing from "./components/game/scenarioComponents/text/Typing";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/typing" element={<Typing />} />
      </Routes>
    </div>
  );
}

export default App;
