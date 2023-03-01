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
                    to={`/destination/Moon`}
                    activeClassName
                    onClick={() => setGETID("Moon")}
                  >
                    MOON
                  </PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination/Mars`}
                    activeClassName
                    onClick={() => setGETID("Mars")}
                  >
                    MARS
                  </PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination/Europa`}
                    activeClassName
                    onClick={() => setGETID("Europa")}
                  >
                    EUROPA
                  </PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink
                    to={`/destination/Titan`}
                    activeClassName
                    onClick={() => setGETID("Titan")}
                  >
                    TITAN
                  </PlanetLink>
                </PlanetLi>
              </NavigationPlanet>
              <PlanetFacts>
                <PlanetName>{name}</PlanetName>
                <PlanetP>{description}</PlanetP>
              </PlanetFacts>
            </PlanetDescr>
            <Line></Line>
            <PlanetTravel>
              <Distance>
                <DistanceTitle>AVG. DISTANCE</DistanceTitle>
                <ActualDistance>{distance}</ActualDistance>
              </Distance>
              <Time>
                <TimeTitle>EST. TRAVEL TIME</TimeTitle>
                <ActualTime>{travel}</ActualTime>
              </Time>
            </PlanetTravel>
          </PlanetWrapper>
        </PlanetInfo>
      </DestinationContainer>
    </>
  );
};

export default Destination;
