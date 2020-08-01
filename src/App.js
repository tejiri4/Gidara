import React from "react";

// images
import ArtistOne from "./assets/What we do section image 1.png";
import ArtistTwo from "./assets/What we do section image 2.png";
import ArtistThree from "./assets/What we do section image 3.png";

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
          contentsRaw={[
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
          ]}
      />
      <Mentors />
      <GroupVerticalCard
        title="Resources"
        subTitle="Resources for student artist"
        buttonName="VIEW ALL RESOURCES"
        hideButton
        contentsRaw={
          [
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
          ]
        }
      />
      <GroupVerticalCard
        subTitle="Resources for student artist"
        buttonName="VIEW ALL RESOURCES"
        hideButton
        contentsRaw={
          [
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
          ]
        }
      />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
