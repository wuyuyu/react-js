import React, { Component } from "react";

class Basket extends Component {
  render() {
    return (
      <div className="basket card">
        <h3>Panier</h3>
        <div className="count-items">
          Nombre d'item:{" "}
          <span className="badge badge-dark">
            {this.props.basket.items.length}
          </span>
        </div>
        <div className="total-price">
          <span className="badge badge-info">
            Total: {this.props.basket.amount}
          </span>
        </div>
      </div>
    );
  }
}

export default Basket;
