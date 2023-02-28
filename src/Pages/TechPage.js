import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import BackTemplate from "../Component/Background Template/BackTemplate";
import Tech from "../Component/TechPage/Tech";
import TechBackground from "../Downloads/assets/technology/background-technology-desktop.jpg";

const TechPage = () => {
  return (
    <>
      <BackTemplate img={TechBackground}>
        <Naviagtion />
        <Tech />
      </BackTemplate>
    </>
  );
};

export default TechPage;
