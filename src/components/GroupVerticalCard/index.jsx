import React from "react";

// components
import VerticalCard from "../VerticalCard";

// styles
import "../../scss/GroupVerticalCard.scss";

// images
import Artist from "../../assets/What we do section image 2.png";
import { NavButton } from "../Button";
import Arrow from "../Arrow";

const GroupVerticalCard = ({ title, subTitle, description }) => {
  return (
    <div className="group-vertical-card">
      <div className="group-vertical-card__title">
        {title && <p>{title}</p>}
      </div>
      <div className="group-vertical-card__content">
        <div>
          {subTitle && <p>{subTitle}</p>}
          {description && <h2>{description}</h2>}
          <div className="group-vertical-card__content__nav-buttons">
            <NavButton>
              <Arrow translatePosition="0" arrowColor="#FFF" />
            </NavButton>
            <NavButton>
              <Arrow translatePosition="180" arrowColor="#FFF" />
            </NavButton>
          </div>
        </div>
        <div className="group-vertical-card__content__vertical-cards">
          <VerticalCard
            title="One"
            description="Place any text you want here etc.
            We invest between N2m - N5m in
            marketing, production and
            promotional fees."
            src={Artist}
          />
          <VerticalCard
            title="One"
            description="Place any text you want here etc.
            We invest between N2m - N5m in
            marketing, production and
            promotional fees."
            src={Artist}
          />
          <VerticalCard
            title="One"
            description="Place any text you want here etc.
            We invest between N2m - N5m in
            marketing, production and
            promotional fees."
            src={Artist}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupVerticalCard;
