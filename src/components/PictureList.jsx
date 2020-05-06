import React, { Component } from "react";
import PictureCard from "./PictureCard";
import * as api from "./api";
import SearchMarsPics from "./SearchMarsPics";

class PictureList extends Component {
  state = {
    photos: [],
    isLoading: true,
  };
  render() {
    const { rover } = this.props;
    const { photos, isLoading } = this.state;
    if (isLoading) return <p>Loading some amazing martian pics!..........</p>;
    return (
      <main>
        {!rover ? (
          <h2>Pictures from all rovers</h2>
        ) : (
          <h2>Pictures from Rover: {rover}</h2>
        )}
        <SearchMarsPics fetchPictures={this.fetchPictures} />
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
  }

  componentDidUpdate(prevProps, prevState) {
    const { rover } = this.props;
    if (rover !== prevProps.rover) {
      this.fetchPictures();
    }
  }

  fetchPictures = (sol) => {
    const { rover } = this.props;
    api.getPictures(rover, sol).then((photos) => {
      console.log(photos);
      this.setState({ photos, isLoading: false });
    });
  };
}

export default PictureList;
