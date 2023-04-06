import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoonPhase from "./components/MoonPhase";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/moonphase" component={MoonPhase} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
