import React from "react";

// styles
import "./App.css";

// components
import Intro from "./components/Intro";
import GroupVerticalCard from "./components/GroupVerticalCard";
import Mentors from "./components/Mentors";
import Update from "./components/Update";
import Footer from "./components/Footer";

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
        title="Resources"
        subTitle="Resources for student artist"
        buttonName="VIEW ALL RESOURCES"
        hideButton
      />
      <GroupVerticalCard
        subTitle="Resources for student artist"
        buttonName="VIEW ALL RESOURCES"
        hideButton
      />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
