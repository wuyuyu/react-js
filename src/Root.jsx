import React, { Component } from "react";
import Card from './Card';
import List from './List';


class Root extends Component {
  
  render() {
    return <div>
      <h3>Panier</h3>
        <List/>
        <Card/>;
      </div>
  }
}

export default Root;
