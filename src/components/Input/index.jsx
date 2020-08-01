import React from "react";
import PropTypes from "prop-types";

// styles
import "../../scss/Input.scss";

const Input = ({ placeholder, ...rest }) => (
  <div className="input">
    <input placeholder={placeholder} {...rest} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  rest: PropTypes.object,
};

export default Input;
