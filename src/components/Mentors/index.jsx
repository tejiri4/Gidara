import React from "react";

// styles
import "../../scss/Mentors.scss";

// components
import { Mentor } from "../Mentor";

// images
import Mentor1 from "../../assets/Mentors section image 1 - Killer Mike.png";
import Mentor2 from "../../assets/Mentors section image 2 - Timbaland.png";
import Mentor3 from "../../assets/Mentors section image 3 - Chance the rapper.png";

// custom hooks
import Navigate from "../../customHook/Navigate";

const Mentors = () => {
  const { contents, handleNavigation } = Navigate([
    {
      id: 1,
      title: "Killer Mike",
      image: Mentor1,
      description: `Michael Santiago Render, better known by his stage name Killer Mike,
            is an American rapper, actor, and activist. He is the founder of Grind
            Time Official Records, which he launched through the SMC and
            Fontana Distribution.`,
    },
    {
      id: 2,
      title: "Timbaland",
      image: Mentor2,
      description: `Timothy Zachary Mosley, known professionally as Timbaland, is an
          American record producer, rapper, singer, songwriter, and DJ.
          Timbaland's first full credit production work was in 1996 on
          Ginuwine...the Bachelor for R&B singer Ginuwine.`,
    },
    {
      id: 3,
      title: "Chance the Rapper",
      image: Mentor3,
      description: `
      Chancelor Jonathan Bennett, known professionally as Chance the
            Rapper, is an American rapper, singer, songwriter, actor, and activist.
            Born in Chicago, Illinois, Chance the Rapper released his debut
            mixtape 10 Day in 2012
      `,
    },
  ]);

  const handleLeftClick = (id) => () => handleNavigation("left");
  const handleRightClick = (id) => () => handleNavigation("right");

  return (
    <div className="mentors">
      <h1>Our Mentors</h1>
      <div>
        {contents.map(({ title, image, description, id }, index) => (
          <Mentor
            id={id}
            key={id}
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
            title={title}
            src={image}
            description={description}
            showNavButtons={index === 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
