import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import BackTemplate from "../Component/Background Template/BackTemplate";
import Tech from "../Component/TechPage/Tech";
import { useParams } from "react-router";
import { technology } from "../Downloads/data";
import TechBackground from "../Downloads/assets/technology/background-technology-desktop.jpg";

const TechPage = () => {
  let { id } = useParams();

  const tech = technology.find((tech) => tech.name === id);
  console.log(tech);
  return (
    <>
      <BackTemplate img={TechBackground}>
        <Naviagtion />
        <Tech {...tech} />
      </BackTemplate>
    </>
  );
};

export default TechPage;
