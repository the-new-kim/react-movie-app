import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";

import Home from "./routes/Home";

function Nav() {
  return (
    <header>
      <Link to="/">
        <h1>home</h1>
      </Link>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
