// src/components/card.jsx
import React from "react";

const Card = (props) => {
  const { current, product, onProductAdd} = props;
  //const { imgUrl, race, type } = chick;
  const { productImage, productCategory, productName } = product;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.product.productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-title">Product Category: {props.product.productCategory}</p>
        <p className="card-text">Name product: {props.product.productName}</p>
        <p>Price: {props.product.productPrice} €</p>
        <button onClick={onProductAdd} class="btn btn-success">
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default Card;
