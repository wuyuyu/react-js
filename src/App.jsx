// src/App.jsx
import React, { Component } from "react";
import Card from "./components/card";
import List from "./components/list";

class App extends Component {
  state = {
    chicken: [
      {
        race: "Harco",
        type: "pondeuse",
        imgUrl: "https://source.unsplash.com/random/150x150",
      },
      {
        race: "Cou nu",
        type: "chair",
        imgUrl: "https://source.unsplash.com/random/150x150",
      },
      {
        race: "Standard",
        type: "chair",
        imgUrl: "https://source.unsplash.com/random/150x150",
      },
    ],
    current: 0,
  };

  render() {
    return (
      <React.Fragment>
        <List current={this.state.current} chicken={this.state.chicken} />
        <hr />
        <Card
          current={this.state.current}
          chick={this.state.chicken[this.state.current]}
          onChickChange={this.handleChickChange}
        />
      </React.Fragment>
    );
  }

  handleChickChange = (current) => {
    this.setState({ current: current });
  };
}

export default App;
