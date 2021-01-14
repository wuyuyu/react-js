import React, { Component } from "react";

class GenderPrediction extends Component {
  state = {
    gender: null,
  };

  async componentDidMount() {
    await fetch(`https://api.genderize.io/?name=khalid`)
      .then((response) => response.json())
      .then(({ gender }) => {
        this.setState({ gender });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h3>
          Name: some name; Gender:
          <u>Ze gender</u>
        </h3>
      </React.Fragment>
    );
  }
}

export default GenderPrediction;
