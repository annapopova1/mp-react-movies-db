import React from "react";
import PropTypes from 'prop-types';

export const Header = ({ isMainPage }) => (
  <header className="container navbar navbar-dark bg-dark py-1">
    <span className="navbar-brand">Movies DB</span>
    {!isMainPage &&
      <button className="btn btn-outline-success" type="submit">SEARCH</button>
    }
  </header>
);

Header.PropTypes = {
  isMainPage: PropTypes.bool
};

Header.defaultProps = {
  isMainPage: true
};
