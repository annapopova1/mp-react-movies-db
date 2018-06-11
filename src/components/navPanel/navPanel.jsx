// @flow
import React, { type Node } from 'react';
import './navPanel.css';

/* eslint jsx-a11y/anchor-is-valid:0 */
/* eslint jsx-a11y/click-events-have-key-events:0 */
/* eslint jsx-a11y/no-static-element-interactions:0 */

type Props = {
  direction: string,
  primaryBrand: ?string,
  secondaryBrand: string,
  links: Array<{
    active: boolean,
    param: string,
    title: string,
    handler: Function,
  }>,
  navBtn: ?{
    title: string,
    handler: Function,
  },
};

const NavPanel = (props: Props): Node => {
  const {
    direction,
    primaryBrand,
    secondaryBrand,
    links,
    navBtn,
  } = props;
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      {
        primaryBrand && <span className="navbar-brand">{primaryBrand}</span>
      }
      <div className={direction === 'left' ? 'navbar-nav mr-auto' : 'navbar-nav ml-auto'}>
        <span className="navbar-brand">{secondaryBrand}</span>
        {
          links.map(link =>
            (link.active
              ? <a key={link.param} className="nav-link active">{link.title}</a>
              : <a key={link.param} className="nav-link" onClick={link.handler(link.param)}>{link.title}</a>))
        }
      </div>
      {
        navBtn &&
          <button className="btn btn-outline-success" type="button" onClick={navBtn.handler}>{navBtn.title}</button>
      }
    </nav>
  );
};

NavPanel.defaultProps = {
  direction: 'left',
  primaryBrand: null,
  secondaryBrand: '',
  links: [],
  navBtn: null,
};

export default NavPanel;
