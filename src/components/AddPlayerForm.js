import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: ""
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    console.log(this.state.value);
    return (
      <form>
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
