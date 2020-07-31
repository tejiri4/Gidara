import React, { useState } from "react";

// styles
import "../../scss/Mentors.scss";

// components
import { Mentor } from "../Mentor";

// images
import Mentor1 from "../../assets/Mentors section image 1 - Killer Mike.png";
import Mentor2 from "../../assets/Mentors section image 2 - Timbaland.png";
import Mentor3 from "../../assets/Mentors section image 3 - Chance the rapper.png";

const Mentors = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      title: "Michael Santiago Render",
      image: Mentor1,
      description: `Michael Santiago Render, better known by his stage name Killer Mike,
            is an American rapper, actor, and activist. He is the founder of Grind
            Time Official Records, which he launched through the SMC and
            Fontana Distribution.`,
    },
    {
      id: 2,
      title: "Timbaland Chance the Rapp",
      image: Mentor2,
      description: `Timothy Zachary Mosley, known professionally as Timbaland, is an
          American record producer, rapper, singer, songwriter, and DJ.
          Timbaland's first full credit production work was in 1996 on
          Ginuwine...the Bachelor for R&B singer Ginuwine.`,
    },
    {
      id: 3,
      title: "Chancelor Jonathan Bennett",
      image: Mentor3,
      description: `
      Chancelor Jonathan Bennett, known professionally as Chance the
            Rapper, is an American rapper, singer, songwriter, actor, and activist.
            Born in Chicago, Illinois, Chance the Rapper released his debut
            mixtape 10 Day in 2012
      `,
    },
  ]);


  const navigate = (type) => {
    const mentorsLength = mentors.length;
    const newMentorArray = [];

    if(type === 'right') {
      mentors.forEach((mentor, index) => {
        if(index !== mentorsLength - 1) {
          newMentorArray.push(mentor)
        }

        if(index === mentorsLength- 1) {
           newMentorArray.unshift(mentor)
        }
      })
    }

    if(type === 'left') {
      mentors.forEach((mentor, index) => {
        if(index !== 0) {
          newMentorArray.push(mentor)
        }

        if(index === mentorsLength- 1) {
           newMentorArray.push(mentors[0])
        }
      })
    }

    setMentors(newMentorArray)
  }

  const handleLeftClick  = (id) => () => navigate('left')
  const handleRightClick = (id) => ()=> navigate('right')

  return (
    <div className="mentors">
      <h1>Our Mentors</h1>
      <div>
        {mentors.map(({ title, image, description, id }, index) => (
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
