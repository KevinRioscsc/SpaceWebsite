import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import CrewPage from "../Component/CrewPage/CrewPage";
import BackTemplate from "../Component/Background Template/BackTemplate";
import CrewBackground from "../Downloads/assets/crew/background-crew-desktop.jpg";

const Crew = () => {
  return (
    <>
      <BackTemplate img={CrewBackground}>
        <Naviagtion />
        <CrewPage />
      </BackTemplate>
    </>
  );
};

export default Crew;
