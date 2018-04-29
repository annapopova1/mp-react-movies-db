import React from 'react';
import PropTypes from 'prop-types';
import './navPanel.css';

const NavPanel = ({
  direction, primaryBrand, secondaryBrand, links, navBtn,
}) => (
  <nav className="navbar navbar-light navbar-expand-md">
    {
      primaryBrand && <span className="navbar-brand">{primaryBrand}</span>
    }
    <div className={direction === 'left' ? 'navbar-nav mr-auto' : 'navbar-nav ml-auto'}>
      <span className="navbar-brand">{secondaryBrand}</span>
      {
        links.map(link =>
          (link.active
            ? <a key={link.param} className="nav-link active" href="#">{link.title}</a>
            : <a key={link.param} className="nav-link" onClick={link.handler(link.param)} href="#">{link.title}</a>))
      }
    </div>
    {
      navBtn &&
        <button className="btn btn-outline-success" type="button" onClick={navBtn.handler}>{navBtn.title}</button>
    }
  </nav>
);

NavPanel.propTypes = {
  direction: PropTypes.string,
  primaryBrand: PropTypes.string,
  secondaryBrand: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  navBtn: PropTypes.shape({
    title: PropTypes.string,
    handler: PropTypes.func,
  }),
};

NavPanel.defaultProps = {
  direction: 'left',
  primaryBrand: null,
  secondaryBrand: '',
  links: [],
  navBtn: null,
};

export default NavPanel;
