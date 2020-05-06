import React, { Component } from "react";

export default class SearchMarsPics extends Component {
  state = { sol: null, camera: "" };
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

        <section>
          Please select your preferred camera:
          <label htmlFor="">
            Front Hazard Avoidance Camera
            <input
              type="radio"
              name="camera"
              value="FHAZ"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Rear Hazard Avoidance Camera
            <input
              type="radio"
              name="camera"
              value="RHAZ"
              onChange={this.handleChange}
            />
          </label>
        </section>
      </form>
    );
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const { sol, camera } = this.state;
    const { fetchPictures } = this.props;
    fetchPictures(sol, camera);
  };
}
