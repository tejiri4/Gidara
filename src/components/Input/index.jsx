import React from "react";

// styles
import "../../scss/Input.scss";

const Input = ({ placeholder, ...rest }) => {
  return (
    <div className="input">
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
