import React from "react";

// styles
import "../../scss/Image.scss";

const Image = ({ src, alt }) => {
  return (
    <div className="image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
