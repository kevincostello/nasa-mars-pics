import React from "react";
import PictureList from "./components/PictureList";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <PictureList path="/" />
        <PictureList path="/:rover" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
