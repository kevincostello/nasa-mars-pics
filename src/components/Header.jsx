import React from "react";

function Header() {
  const date = new Date();
  return (
    <header>
      <h1>Martian Pics</h1>
      <p>Earth date: {date.toUTCString()}</p>
    </header>
  );
}

export default Header;
