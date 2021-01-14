import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.productCategory}</li>
          <li className="list-group-item">
            {Math.round(product.salePrice * 100) / 100}
          </li>
        </ul>
        <div className="card-body">
          <button
            className="btn btn-success"
            onClick={() => this.props.onAddToBasket(product)}
          >
            Ajouter
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
