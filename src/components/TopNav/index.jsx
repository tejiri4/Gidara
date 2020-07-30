import React from "react";
import { NavLink } from "react-router-dom";

// styles
import "../../scss/TopNav.scss";

const TopNav = () => {
  return (
    <div className="top-nav">
      <NavLink to="/" activeClassName="selected">
        Companies
      </NavLink>
      <NavLink to="/">Teams</NavLink>
      <NavLink to="/">Resources</NavLink>
      <NavLink to="/">Programs</NavLink>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
};

export default TopNav;
