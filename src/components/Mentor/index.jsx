import React from "react";

// styles
import "../../scss/Mentor.scss";
import Image from "../Image";
import { NavButton } from "../Button";
import Arrow from "../SVGs/Arrow";

export const Mentor = ({ src, title, description, showNavButtons, handleRightClick, handleLeftClick, id }) => {
  return (
    <div className="mentor">
      <Image src={src} alt="mentor" />
      <div className="mentor__content">
        {showNavButtons && (
          <div className="mentor__content__nav-buttons">
            <NavButton onClick={handleRightClick(id)}>
              <Arrow translatePosition="0" />
            </NavButton>
            <NavButton onClick={handleLeftClick(id)}>
              <Arrow translatePosition="180" onClick={handleLeftClick} />
            </NavButton>
          </div>
        )}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
