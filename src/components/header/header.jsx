import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const Header = ({ location, history }) => {
  const goBackToMainPage = () => history.push('/');
  return (
    <header className="container navbar navbar-dark bg-dark py-1">
      <span className="navbar-brand">Movies DB</span>
      {!location.pathname.startsWith('/search') &&
        <button className="btn btn-outline-success" type="submit" onClick={goBackToMainPage}>SEARCH</button>
      }
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.shape({}).isRequired,
  hitory: PropTypes.shape({}).isRequired,
};

export default withRouter(Header);
