import React from "react";
import PropTypes from "prop-types";

// styles
import "../../scss/Image.scss";

const Image = ({ src, alt }) => {
  return (
    <div className="image">
      <img src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
