import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppSwitch extends Component {
  render() {
    return (
      <nav>
        <ul className="nav nav-tabs">
          <Link to="/">
            <li className="nav-item mr-3">Home</li>
          </Link>
          <Link to="/chicken">
            <li className="nav-item mr-3">Chicken</li>
          </Link>
          <Link to="/e-commerce">
            <li className="nav-item mr-3">E-Commerce</li>
          </Link>
          <Link to="/persons">
            <li className="nav-item mr-3">Persons</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default AppSwitch;
