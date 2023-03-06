import React from "react";
import Destination from "../Component/DestinationHero/Destination";
import { useParams } from "react-router-dom";
import { destination } from "../Downloads/data";

const DestinationPage = () => {
  let { id } = useParams();

  const planetID = id ? id : "Moon";

  const item = destination.find((prev) => prev.name === planetID);

  return (
    <>
      {console.log(id)}
      <Destination {...item} />
    </>
  );
};

export default DestinationPage;
