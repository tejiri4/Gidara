import React from "react";

// styles
import "./App.css";

// components
import Intro from "./components/Intro";
import GroupVerticalCard from "./components/GroupVerticalCard";
import Mentors from "./components/Mentors";

function App() {
  return (
    <div className="App">
      <Intro />
      <GroupVerticalCard
        title="What we do"
        subTitle="You’re in great company"
        description="
          Gidara seeks to connect young talented musicians with world class
          producers, managers etc"
      />
      <Mentors />
      <GroupVerticalCard
        title="What we do"
        subTitle="You’re in great company"
        description="
          Gidara seeks to connect young talented musicians with world class
          producers, managers etc"
      />
      <GroupVerticalCard
        title="What we do"
        subTitle="You’re in great company"
        description="
          Gidara seeks to connect young talented musicians with world class
          producers, managers etc"
      />
    </div>
  );
}

export default App;
