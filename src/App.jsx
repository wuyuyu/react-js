// src/App.jsx
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Root from "./components/Root";
import AppSwitch from "./components/appSwitch";
import Persons from "./components/persons";
import GenderPrediction from "./components/genderPrediction";

class App extends Component {
  render() {
    return (
      <Router>
        <AppSwitch />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chicken" component={Main} />
          <Route path="/e-commerce" component={Root} />
          <Route path="/persons" exact component={Persons} />
          <Route
            path="/persons/gender-prediction/:name"
            component={GenderPrediction}
          />
        </Switch>
      </Router>
    );

  }
}

const Home = () => <h3>Hello React</h3>;

export default App;
