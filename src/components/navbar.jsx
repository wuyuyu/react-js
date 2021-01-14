import React, { Component } from "react";
import Search from "./search";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-danger">
        <a className="navbar-brand" href="/">
          Super
        </a>

        <div className="" id="navbarColor02">
          <ul className="navbar-nav mr-auto"></ul>

          <Search
            onSearchChange={(query) => this.props.onSearchChange(query)}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
