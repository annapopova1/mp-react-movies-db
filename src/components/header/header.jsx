import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isMainPage }) => (
  <header className="container navbar navbar-dark bg-dark py-1">
    <span className="navbar-brand">Movies DB</span>
    {!isMainPage &&
      <button className="btn btn-outline-success" type="submit">SEARCH</button>
    }
  </header>
);

Header.propTypes = {
  isMainPage: PropTypes.bool,
};

Header.defaultProps = {
  isMainPage: true,
};

export default Header;
