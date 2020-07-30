import React from "react";

// components
import Image from "../Image";

// styles
import "../../scss/VerticalCard.scss"

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

export default VerticalCard;
