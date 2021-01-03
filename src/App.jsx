// src/App.jsx
import React, { Component } from "react";
import Card from "./components/card";

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
        <ul className="list-group">
          {this.state.chicken.map((chick, index) => (
            <li key={index} className={this.getListClasses(index)}>
              {chick.race}
            </li>
          ))}
        </ul>
        <hr />
        <Card
          current={this.state.current}
          chicken={this.state.chicken}
          onChickChange={this.handleChickChange}
        />
      </React.Fragment>
    );
  }

  handleChickChange = (current) => {
    this.setState({ current: current });
  };

  getListClasses(index) {
    const classes = "list-group-item";
    return this.state.current === index ? classes + " active" : classes;
  }
}

export default App;
