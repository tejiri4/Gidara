import React from "react";

// styles
import "../../scss/Mentor.scss";
import Image from "../Image";
import { NavButton } from "../Button";
import Arrow from "../Arrow";

export const Mentor = ({ src, title, description, showNavButtons }) => {
  return (
    <div className="mentor">
      <Image src={src} alt="mentor" />
      <div className="mentor__content">
        {showNavButtons && (
          <div className="mentor__content__nav-buttons">
            <NavButton>
              <Arrow translatePosition="0" />
            </NavButton>
            <NavButton>
              <Arrow translatePosition="180" />
            </NavButton>
          </div>
        )}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
