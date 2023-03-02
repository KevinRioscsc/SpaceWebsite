import React from "react";
import planetPhoto from "../../Downloads/assets/destination/image-moon.png";
import {
  DestinationContainer,
  Title,
  PlanetInfo,
  PlanetPhoto,
  PlanetDescr,
  NavigationPlanet,
  PlanetFacts,
  PlanetName,
  PlanetP,
  Line,
  PlanetTravel,
  Distance,
  DistanceTitle,
  ActualDistance,
  Time,
  TimeTitle,
  ActualTime,
  Number,
  TitleName,
  PlanetLi,
  PlanetLink,
  PlanetWrapper,
} from "./Styled";
import { useNavigate } from "../Context/navigationGuide";

const Destination = (props) => {
  const { setGETID } = useNavigate();
  const { name, images, description, distance, travel } = props;

  return (
    <>
      <DestinationContainer>
        <Title>
          <Number>01</Number>
          <TitleName>PICK YOUR DESTINATION</TitleName>
        </Title>
        <PlanetInfo>
          <PlanetPhoto src={images.png} alt="planet photo"></PlanetPhoto>
          <PlanetWrapper>
            <PlanetDescr>
              <NavigationPlanet>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination `}
                    isactive={name === "Moon" ? true : false}
                  >
                    MOON
                  </PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination/Mars`}
                    isactive={name === "Mars" ? true : false}
                  >
                    MARS
                  </PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination/Europa`}
                    isactive={name === "Europa" ? true : false}
                  >
                    EUROPA
                  </PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination/Titan`}
                    isactive={name === "Titan" ? true : false}
                  >
                    TITAN
                  </PlanetLink>
                </PlanetLi>
              </NavigationPlanet>
              <PlanetFacts>
                <PlanetName>{name.toUpperCase()}</PlanetName>
                <PlanetP>{description}</PlanetP>
              </PlanetFacts>
            </PlanetDescr>
            <Line></Line>
            <PlanetTravel>
              <Distance>
                <DistanceTitle>AVG. DISTANCE</DistanceTitle>
                <ActualDistance>{distance.toUpperCase()}</ActualDistance>
              </Distance>
              <Time>
                <TimeTitle>EST. TRAVEL TIME</TimeTitle>
                <ActualTime>{travel.toUpperCase()}</ActualTime>
              </Time>
            </PlanetTravel>
          </PlanetWrapper>
        </PlanetInfo>
      </DestinationContainer>
    </>
  );
};

export default Destination;
