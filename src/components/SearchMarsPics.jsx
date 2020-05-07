import React, { Component } from "react";

export default class SearchMarsPics extends Component {
  state = {
    sol: "",
    camera: "",
    curiosity: {
      FHAZ: "Front Hazard Avoidance Camera",
      RHAZ: "Rear Hazard Avoidance Camera",
      MAST: "Mast Camera",
      CHEMCAM: "Chemistry and Camera Complex",
      MAHLI: "Mars Hand Lens Imager",
      MARDI: "Mars Descent Imager",
      NAVCAM: "Navigation Camera",
    },

    opportunity: {
      FHAZ: "Front Hazard Avoidance Camera",
      RHAZ: "Rear Hazard Avoidance Camera",
      NAVCAM: "Navigation Camera",
      PANCAM: "Panoramic Camera",
      MINITES: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    },

    spirit: {
      FHAZ: "Front Hazard Avoidance Camera",
      RHAZ: "Rear Hazard Avoidance Camera",
      NAVCAM: "Navigation Camera",
      PANCAM: "Panoramic Camera",
      MINITES: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    },
  };
  render() {
    let roverCam = this.state["curiosity"];
    const { rover, max_sol } = this.props;
    const { sol, camera } = this.state;
    if (rover) roverCam = this.state[rover];

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Search for Mars Pics</h3>
        <label htmlFor="">
          Sol date:
          <input
            type="number"
            min="0"
            max={max_sol}
            name="sol"
            onChange={this.handleChange}
            value={sol}
          />
        </label>

        <section>
          <p>Please select your preferred camera:</p>
          {Object.keys(roverCam).map((camera) => {
            return (
              <label htmlFor="" key={camera}>
                {roverCam[camera]}
                <input
                  type="radio"
                  name="camera"
                  value={camera}
                  onChange={this.handleChange}
                />
              </label>
            );
          })}
          <button>Submit your search</button>
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
    this.setState({ sol: "", camera: "" });
  };
}
