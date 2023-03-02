import React from "react";
import DestinationBackground from "../Downloads/assets/destination/background-destination-desktop.jpg";
import Destination from "../Component/DestinationHero/Destination";
import Naviagtion from "../Component/Navigation/Naviagtion";
import BackTemplate from "../Component/Background Template/BackTemplate";
import { useParams } from "react-router-dom";
import { destination } from "../Downloads/data";

const DestinationPage = () => {
  let { id } = useParams();

  const planetID = id ? id : "Moon";

  const item = destination.find((prev) => prev.name === planetID);

  return (
    <>
      <BackTemplate img={DestinationBackground}>
        <Naviagtion />
        <Destination {...item} />
      </BackTemplate>
    </>
  );
};

export default DestinationPage;
