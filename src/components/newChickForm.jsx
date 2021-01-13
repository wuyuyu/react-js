import React, { Component } from "react";

class NewChickForm extends Component {
  state = {
    form: {
      race: "",
      type: "",
      imgUrl: "",
    },
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Race</label>
          <input
            name="race"
            type="text"
            value={this.state.form.race}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <input
            name="type"
            type="text"
            value={this.state.form.type}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>imgUrl</label>
          <input
            name="imgUrl"
            type="text"
            value={this.state.form.imgUrl}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-md btn-success" type="submit">
          Ajouter
        </button>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { form } = this.state;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    form[name] = value;
    this.setState({ form });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let chick = {};

    for (var pair of formData.entries()) {
      chick[pair[0]] = pair[1];
    }

    this.props.onNewChick(chick);
  };
}

export default NewChickForm;
