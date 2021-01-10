import React, { Component } from "react";
import ListItem from "./listItem.jsx";

class List extends Component {
  state = {
    chicken: this.props.chicken,
    current: this.props.current,
  };

  render() {
    return (
      <ul className="list-group">
        {this.state.chicken.map((chick, index) => (
          <ListItem
            key={index}
            current={this.state.current}
            chicken={this.state.chicken}
            chick={chick}
          />
        ))}
      </ul>
    );
  }

  getListClasses(index) {
    const classes = "list-group-item";
    return this.state.current === index ? classes + " active" : classes;
  }
}

export default List;
