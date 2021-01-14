// src/Root.jsx
import React, { Component } from "react";
import Action from "./components/action";
import Navbar from "./components/navbar";
import Basket from "./components/basket";
import ProductCard from "./components/productCard";
import ProductList from "./components/productList";
import { products } from "./data/products";

class Root extends Component {
  state = {
    currentProduct: null,
    listStart: 0,
    originalProducts: [],
    products: null,
    productsToDisplay: null,
    basket: {
      items: [],
      amount: 0,
    },
  };

  constructor() {
    super();

    this.state.originalProducts = products;
    this.state.products = products;

    this.state.productsToDisplay = this.state.products.slice(0, 5);

    this.state.currentProduct = this.state.productsToDisplay[2];
  }

  render() {
    return (
      <React.Fragment>
        <Navbar onSearchChange={this.handleSearch} />

        <Basket basket={this.state.basket} />

        <div className="mt-3" style={{ width: "18rem" }}>
          <ProductList productsToDisplay={this.state.productsToDisplay} />

          <hr />

          <Action onAction={this.handleAction} />

          <hr />

          {this.state.currentProduct === null ||
          this.state.currentProduct === undefined ? (
            <h5>Pas encore de produit</h5>
          ) : (
            <ProductCard
              product={this.state.currentProduct}
              onAddToBasket={this.handleAddToBasket}
            />
          )}
        </div>
      </React.Fragment>
    );
  }

  handleSearch = (query) => {
    const products = this.state.originalProducts.filter((product) => {
      return product.productCategory.toLowerCase().includes(query);
    });

    this.setState({
      products,
      productsToDisplay: products.slice(0, 5),
      currentProduct: products[2],
      listStart: 0,
    });
  };

  handleAction = (action) => {
    const indexOfCurrentProduct = this.state.products
      .map((product) => product.productId)
      .indexOf(this.state.currentProduct.productId);

    if (
      action === "next" &&
      indexOfCurrentProduct >= this.state.products.length - 3
    ) {
      return;
    }
    if (action === "previous" && indexOfCurrentProduct <= 2) {
      return;
    }

    this.setState(
      {
        listStart:
          action === "next"
            ? this.state.listStart + 1
            : this.state.listStart - 1,
      },
      () => {
        this.setState(
          {
            productsToDisplay: this.state.products.slice(
              this.state.listStart,
              this.state.listStart + 5
            ),
          },
          () => {
            this.setState({ currentProduct: this.state.productsToDisplay[2] });
          }
        );
      }
    );
  };

  handleAddToBasket = (product) => {
    const { basket } = this.state;

    basket.items.push(product.productId);
    basket.items = [...new Set(basket.items)];
    basket.amount = Math.round((basket.amount + product.salePrice) * 100) / 100;

    this.setState({ basket });
  };
}

export default Root;
