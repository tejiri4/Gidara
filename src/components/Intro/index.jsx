import React from "react";

// styles
import "../../scss/Intro.scss";

// components
import Image from "../Image";

// assets
import Hero from "../../assets/Hero image.png";
import TopNav from "../TopNav";
import Logo from "../Logo";
import { NavButton } from "../Button";
import Arrow from "../SVGs/Arrow";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <Logo color="#159B69" />
        <TopNav />
      </div>
      <div>
        <div>
          <p>Your music career success partner</p>
          <h1>
            We back Nigerian indie artists from around the world and help them
            do their best work
          </h1>
          <p>
            We invest between N2m - N5m in marketing, production and promotional
            fees in youbg budding Nigerian artists and help them suceed with
            design support and our network of successful Indie musicians
          </p>
          <NavButton>
            <Arrow />
          </NavButton>
        </div>
        <div>
          <Image src={Hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
