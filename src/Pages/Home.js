import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import Background from "../Downloads/assets/home/background-home-desktop.jpg";
import Hero from "../Component/Hero/Hero";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Naviagtion />
      <Hero />
    </div>
  );
};

export default Home;
