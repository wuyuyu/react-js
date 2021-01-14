import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppSwitch extends Component {
  render() {
    return (
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item mr-3">Home</li>
          <li className="nav-item mr-3">Chicken</li>
          <li className="nav-item mr-3">E-Commerce</li>
          <li className="nav-item mr-3">Persons</li>
        </ul>
      </nav>
    );
  }
}

export default AppSwitch;
