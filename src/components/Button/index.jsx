import React from "react";
import PropTypes from "prop-types";

// styles
import "../../scss/Button.scss";

export const NavButton = ({ children, onClick }) => (
  <div className="nav-button" onClick={onClick}>
    {children}
  </div>
);

export const PrimaryButton = ({ name, onClick, children }) => (
  <div className="primary-button" onClick={onClick}>
    <button>
      <span>{name} </span>
      <div>{children}</div>
    </button>
  </div>
);

NavButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


PrimaryButton.protoTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

