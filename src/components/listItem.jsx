import React, { Component } from "react";

class ListItem extends Component {
  state = {
    current: this.props.current,
    chick: this.props.chick,
  };

  render() {
    return (
      <li className={this.getListClasses(this.state.index)}>
        {this.state.chick.race}
      </li>
    );
  }

  getListClasses(index) {
    const classes = "list-group-item";
    return this.state.current === index ? classes + " active" : classes;
  }
}

export default ListItem;
