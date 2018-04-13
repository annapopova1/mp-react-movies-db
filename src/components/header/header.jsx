import React from "react";

export const Header = ({ isMainPage }) => (
  <header className="container navbar navbar-dark bg-dark py-1">
    <span className="navbar-brand">Movies DB</span>
    {!isMainPage &&
      <button className="btn btn-outline-success" type="submit">SEARCH</button>
    }
  </header>
);
