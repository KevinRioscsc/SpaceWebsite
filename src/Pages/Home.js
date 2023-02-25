import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import Background from "../Downloads/assets/home/background-home-desktop.jpg";
import DestinationBackground from "../Downloads/assets/destination/background-destination-desktop.jpg";
import Hero from "../Component/Hero/Hero";
import Destination from "../Component/DestinationHero/Destination";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: `url(${DestinationBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Naviagtion />
      <Destination />
    </div>
  );
};

export default Home;
