import React, { Component } from "react";

class Action extends Component {
  render() {
    return (
      <div className="text-center">
        <button
          className="btn btn-secondary mr-3"
          onClick={() => this.props.onAction("previous")}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => this.props.onAction("next")}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Action;
