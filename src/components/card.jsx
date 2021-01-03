// src/components/card.jsx
import React, { Component } from "react";

class Card extends Component {
  state = {
    current: this.props.current,
    chicken: this.props.chicken,
  };

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.getNext().imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.getNext().race}</h5>
          <p className="card-text">est une poule {this.getNext().type}</p>
          <a
            href="#"
            onClick={this.handleNextButton}
            className="btn btn-primary"
          >
            Next
          </a>
        </div>
      </div>
    );
  }

  handleNextButton = () => {
    const { current } = this.state;

    const newCurrent = current === 2 ? 0 : current + 1;

    this.setState({ current: newCurrent });

    this.props.onChickChange(newCurrent);
  };

  getNext() {
    const { current, chicken } = this.state;

    return chicken[current];
  }
}

export default Card;
