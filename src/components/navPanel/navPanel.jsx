import React from "react";
import "./navPanel.css";

export const NavPanel = ({ direction, primaryBrand, secondaryBrand, links, navBtn }) => (
  <nav className="navbar navbar-light navbar-expand-md">
    {
      primaryBrand && <span className="navbar-brand">{primaryBrand}</span>
    }
    <div className={direction === 'left' ? 'navbar-nav mr-auto' : 'navbar-nav ml-auto'}>
      <span className="navbar-brand">{secondaryBrand}</span>
      {
        links.map(link =>
          link.active
            ? <a key={link.param} className='nav-link active' href="#">{link.title}</a>
            : <a key={link.param} className='nav-link' href="#" onClick={link.handler(link.param)}>{link.title}</a>
        )
      }
    </div>
    {
      navBtn && <button className="btn btn-outline-success" type="button" onClick={navBtn.handler}>{navBtn.title}</button>
    }
  </nav>
);
