import React, { Component } from "react";

export default class SearchMarsPics extends Component {
  state = { sol: null };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Search for Mars Pics</h3>
        <label htmlFor="">
          Sol date:
          <input
            type="number"
            min="0"
            max="2000"
            name="sol"
            onChange={this.handleChange}
          />
        </label>
        <button>Submit your search</button>
      </form>
    );
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { sol } = this.state;
    const { fetchPictures } = this.props;
    fetchPictures(sol);
  };
}
