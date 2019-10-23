import React from "react";
import CounterGroup from "./CounterGroup/components/CounterGroup/CounterGroup"
import App from "./ToDo/components/App";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function BasicExample() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist">ToDo List</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todolist">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
      <div>
        <h2>Home</h2>
          <CounterGroup />
      </div>
  );
}

function About() {
  return (
      <div>
        <h2>ToDo List</h2>
          <App />
      </div>
  );
}
