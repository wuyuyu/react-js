import React, { Component } from "react";
import Card from "./components/card";
import List from "./components/list";
import { products } from "./data/products";

class Root extends Component {
  state = {
    products: products,
    current: 0,
    numberItem: 0,
    totalPrice: 0,
    addedItem: [],
  };

  render() {
    let componentsToRender = <h2>No elements to render</h2>;

    if (this.state.products.length) {
      componentsToRender = (
        <React.Fragment>
          <List
            current={this.state.current}
            products={this.state.products}
            onProductPrevious={this.handleProductPrevious}
            onProductNext={this.handleProductNext}
          />
          <hr />
          <Card
            current={this.state.current}
            product={this.state.products[this.state.current]}
            onProductAdd={this.handleProductAdd}
          />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div class="bg-danger">
          Super  
          <input type="search" />
        </div>
        <h3>Panier</h3>
        <span>Nombre Item: {this.state.numberItem}</span>
        <br></br>
        <span>Total: {this.state.totalPrice} </span>
        <hr></hr>
        {componentsToRender}
      </React.Fragment>
    );
  }

  handleNewProduct = (product) => {
    this.setState({ products: [...this.state.products, product] });
  };

  handleDeleteListItem = (index) => {
    const product = this.state.products.filter((product, key) => {
      return key !== index;
    });

    this.setState({ product: product });
  };

  handleProductPrevious = () => {
    const current =
      this.state.current === this.state.products.length - 1
        ? 0
        : this.state.current - 1;
    this.setState({ current: current });
  };

  handleProductNext = () => {
    const current =
      this.state.current === this.state.products.length - 1
        ? 0
        : this.state.current + 1;
    this.setState({ current: current });
  };

  handleProductAdd = () => {
    const addedItem = this.state.addedItem;
    //console.log(addedItem);
    //console.log(this.state.products[this.state.current].productId);
    if (addedItem.includes(this.state.products[this.state.current].productId)) {
      alert("cet produit est déjà dans le panier");
    } else {
      this.setState({ numberItem: this.state.numberItem + 1 });
      this.setState({
        totalPrice:
          this.state.totalPrice +
          this.state.products[this.state.current].productPrice,
      });
      addedItem.push(this.state.products[this.state.current].productId);
      this.setState({ addedItem: addedItem });
    }
  };
}

export default Root;
