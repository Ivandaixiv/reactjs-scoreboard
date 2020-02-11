import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: ""
  };

  handleValueChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter A Player's Name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
export default AddPlayerForm;
