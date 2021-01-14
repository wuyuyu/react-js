import React, { Component } from "react";
import ProductListItem from "./productListItem";

class ProductList extends Component {
  render() {
    return (
      <ul className="list-group mb-3 mt-3">
        {this.props.productsToDisplay.map((product, index) => (
          <ProductListItem
            key={product.productId}
            product={product}
            index={index}
          />
        ))}
      </ul>
    );
  }
}

export default ProductList;
