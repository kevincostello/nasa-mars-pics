import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/curiosity">Curiosity</Link>
      <Link to="/opportunity">Opportunity</Link>
      <Link to="/spirit">Spirit</Link>
    </nav>
  );
}

export default Nav;
