import React, { Component } from "react";
import PictureCard from "./PictureCard";
import * as api from "./api";
import SearchMarsPics from "./SearchMarsPics";

class PictureList extends Component {
  state = {
    photos: [],
    isLoading: true,
    max_sol: null,
  };
  render() {
    const { rover } = this.props;
    const { photos, isLoading, max_sol } = this.state;

    if (isLoading) return <p>Loading some amazing martian pics!..........</p>;
    return (
      <main>
        {!rover ? (
          <h2>Pictures from all rovers</h2>
        ) : (
          <h2>Pictures from Rover: {rover}</h2>
        )}

        <SearchMarsPics
          fetchPictures={this.fetchPictures}
          rover={rover}
          max_sol={max_sol}
        />
        <ul>
          {photos.map((picture) => {
            return <PictureCard key={picture.id} {...picture} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.fetchPictures();
    this.fetchMaxSol();
  }

  componentDidUpdate(prevProps, prevState) {
    const { rover } = this.props;

    if (rover !== prevProps.rover) {
      this.fetchPictures();
      this.fetchMaxSol();
      console.log("updating");
    }
  }

  fetchPictures = (sol, camera) => {
    const { rover } = this.props;
    api.getPictures(rover, sol, camera).then((photos) => {
      console.log(photos);
      this.setState({ photos, isLoading: false });
    });
  };

  fetchMaxSol = () => {
    const { rover } = this.props;
    api.getMaxSol(rover).then(({ max_sol }) => {
      this.setState({ max_sol });
    });
  };
}

export default PictureList;
