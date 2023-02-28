import React from "react";
import DestinationBackground from "../Downloads/assets/destination/background-destination-desktop.jpg";
import Destination from "../Component/DestinationHero/Destination";
import Naviagtion from "../Component/Navigation/Naviagtion";
import BackTemplate from "../Component/Background Template/BackTemplate";

const DestinationPage = () => {
  return (
    <>
      <BackTemplate img={DestinationBackground}>
        <Naviagtion />
        <Destination />
      </BackTemplate>
    </>
  );
};

export default DestinationPage;
