import React, { Component } from "react";

class ProductListItem extends Component {
  render() {
    const { product, index } = this.props;

    return (
      <React.Fragment>
        <li className={"list-group-item" + (index === 2 ? " active" : "")}>
          <b>{product.productName}</b>
          <small>({product.productCategory})</small>
        </li>
      </React.Fragment>
    );
  }
}

export default ProductListItem;
