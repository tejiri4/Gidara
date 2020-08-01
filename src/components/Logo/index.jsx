import React from "react";
import PropTypes from "prop-types";

// styles
import "../../scss/Logo.scss";

const Logo = ({ color }) => (
  <div className="logo">
    <div>
      <svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="13" y="14" width="2" height="10" fill="#159B69" />
        <rect x="8" y="14" width="2" height="10" fill="#159B69" />
        <rect x="13" width="2" height="10" fill="#159B69" />
        <rect x="6" width="4" height="10" fill="#159B69" />
        <rect y="14" width="10" height="10" rx="2" fill="#159B69" />
        <rect x="13" y="14" width="10" height="10" rx="2" fill="#159B69" />
        <rect x="13" width="10" height="10" rx="2" fill="#159B69" />
        <rect width="10" height="10" rx="2" fill="#159B69" />
      </svg>
    </div>
    <h3 style={{ color }}>Gidara</h3>
  </div>
);

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
