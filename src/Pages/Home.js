import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import Background from "../Downloads/assets/home/background-home-desktop.jpg";
import Hero from "../Component/Hero/Hero";
import BackTemplate from "../Component/Background Template/BackTemplate";

const Home = () => {
  return (
    <BackTemplate img={Background}>
      <Naviagtion />
      <Hero />
    </BackTemplate>
  );
};

export default Home;
