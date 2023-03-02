import React from "react";
import Naviagtion from "../Component/Navigation/Naviagtion";
import CrewPage from "../Component/CrewPage/CrewPage";
import { useParams } from "react-router";
import BackTemplate from "../Component/Background Template/BackTemplate";
import { crew } from "../Downloads/data";
import CrewBackground from "../Downloads/assets/crew/background-crew-desktop.jpg";

const Crew = () => {
  let { id } = useParams();

  const crewMember = crew.find((item) => item.name === id);

  return (
    <>
      <BackTemplate img={CrewBackground}>
        <Naviagtion />
        <CrewPage {...crewMember} />
      </BackTemplate>
    </>
  );
};

export default Crew;
