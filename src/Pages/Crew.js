import React from "react";
import CrewPage from "../Component/CrewPage/CrewPage";
import { useParams } from "react-router";
import { crew } from "../Downloads/data";

const Crew = () => {
  let { id } = useParams();

  const crewInfo = id ? id : "Douglas Hurley";
  const crewMember = crew.find((item) => item.name === crewInfo);

  return (
    <>
      <CrewPage {...crewMember} />
    </>
  );
};

export default Crew;
