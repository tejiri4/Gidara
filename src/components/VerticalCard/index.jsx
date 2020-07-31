import React from "react";
import PropTypes from "prop-types";

// components
import Image from "../Image";

// styles
import "../../scss/VerticalCard.scss";

const VerticalCard = ({ title, description, src }) => {
  return (
    <div className="vertical-card">
      <Image src={src} alt="artist" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

VerticalCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
};

export default VerticalCard;
