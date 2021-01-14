import React, { Component } from "react";

class Search extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleInputChange}
        />
      </form>
    );
  }

  handleInputChange = (event) => {
    let { query: query } = this.state;
    query = event.target.value;
    this.setState({ query: query });

    this.props.onSearchChange(query);
  };
}

export default Search;
