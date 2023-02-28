import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import Background from "../Downloads/assets/home/background-home-desktop.jpg";
import DestinationBackground from "../Downloads/assets/destination/background-destination-desktop.jpg";
import Hero from "../Component/Hero/Hero";
import CrewPage from "../Component/CrewPage/CrewPage";
import Destination from "../Component/DestinationHero/Destination";
import BackTemplate from "../Component/Background Template/BackTemplate";
import Tech from "../Component/TechPage/Tech";
import CrewBackground from "../Downloads/assets/crew/background-crew-desktop.jpg";
import TechBackground from "../Downloads/assets/technology/background-technology-desktop.jpg";
const Home = () => {
  return (
    <BackTemplate img={TechBackground}>
      <Naviagtion />
      <Tech />
    </BackTemplate>
  );
};

export default Home;
