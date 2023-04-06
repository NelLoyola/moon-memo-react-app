import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import MoonPhase from "./components/MoonPhase";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moonphase" element={<MoonPhase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
