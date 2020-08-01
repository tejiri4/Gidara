import React from "react";
import PropTypes from "prop-types";

// components
import VerticalCard from "../VerticalCard";

// styles
import "../../scss/GroupVerticalCard.scss";

// images
import ArtistOne from "../../assets/What we do section image 1.png";
import ArtistTwo from "../../assets/What we do section image 2.png";
import ArtistThree from "../../assets/What we do section image 3.png";

// components
import { NavButton, PrimaryButton } from "../Button";
import Arrow from "../SVGs/Arrow";
import LongArrow from "../SVGs/LongArrow";

// custom hooks
import Navigate from "../../customHook/Navigate";

const GroupVerticalCard = ({
  title,
  subTitle,
  description,
  buttonName,
  hideButton,
}) => {
  const { contents, handleNavigation } = Navigate([
    {
      id: 1,
      title: "One",
      description: `Place any text you want here etc.
      We invest between N2m - N5m in
      marketing, production and
      promotional fees.`,
      src: ArtistOne,
    },
    {
      id: 2,
      title: "Two",
      description: `Place any text you want here etc.
      We invest between N2m - N5m in
      marketing, production and
      promotional fees.`,
      src: ArtistTwo,
    },
    {
      id: 3,
      title: "Three",
      description: `Place any text you want here etc.
      We invest between N2m - N5m in
      marketing, production and
      promotional fees.`,
      src: ArtistThree,
    },
  ]);

  return (
    <div className="group-vertical-card">
      <div className="group-vertical-card__title">
        {title && <p>{title}</p>}
      </div>
      <div className="group-vertical-card__content">
        <div>
          {subTitle && <p>{subTitle}</p>}
          {description && <h2>{description}</h2>}
          {!hideButton && (
            <div className="group-vertical-card__content__nav-buttons">
              <NavButton onClick={() => handleNavigation("right")}>
                <Arrow translatePosition="0" arrowColor="#FFF" />
              </NavButton>
              <NavButton onClick={() => handleNavigation("left")}>
                <Arrow translatePosition="180" arrowColor="#FFF" />
              </NavButton>
            </div>
          )}
        </div>
        <div className="group-vertical-card__content__vertical-cards">
          {contents &&
            contents.map(({ title, description, src }) => (
              <VerticalCard title={title} description={description} src={src} />
            ))}
        </div>
        <div>
          {buttonName && (
            <PrimaryButton name={buttonName}>
              <LongArrow />
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

GroupVerticalCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  buttonName: PropTypes.string,
  hideButton: PropTypes.bool,
};

export default GroupVerticalCard;
