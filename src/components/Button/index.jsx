import React from "react";

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
