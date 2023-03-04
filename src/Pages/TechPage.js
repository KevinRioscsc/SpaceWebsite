import React from "react";
import Tech from "../Component/TechPage/Tech";
import { useParams } from "react-router";
import { technology } from "../Downloads/data";

const TechPage = () => {
  let { id } = useParams();
  const techObj = id ? id : "Launch vehicle";

  const tech = technology.find((tech) => tech.name === techObj);

  return (
    <>
      <Tech {...tech} />
    </>
  );
};

export default TechPage;
