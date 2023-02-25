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

const Destination = () => {
  return (
    <div>
      <DestinationContainer>
        <Title>
          <Number>01</Number>
          <TitleName>PICK YOUR DESTINATION</TitleName>
        </Title>
        <PlanetInfo>
          <PlanetPhoto src={planetPhoto} alt="planet photo"></PlanetPhoto>
          <PlanetWrapper>
            <PlanetDescr>
              <NavigationPlanet>
                <PlanetLi>
                  <PlanetLink>MOON</PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink>MARS</PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink>EUROPA</PlanetLink>
                </PlanetLi>
                <PlanetLi>
                  <PlanetLink>TITAN</PlanetLink>
                </PlanetLi>
              </NavigationPlanet>
              <PlanetFacts>
                <PlanetName>MOON</PlanetName>
                <PlanetP>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </PlanetP>
              </PlanetFacts>
            </PlanetDescr>
            <Line></Line>
            <PlanetTravel>
              <Distance>
                <DistanceTitle>AVG. DISTANCE</DistanceTitle>
                <ActualDistance>384,400 KM</ActualDistance>
              </Distance>
              <Time>
                <TimeTitle>EST. TRAVEL TIME</TimeTitle>
                <ActualTime>3 DAYS</ActualTime>
              </Time>
            </PlanetTravel>
          </PlanetWrapper>
        </PlanetInfo>
      </DestinationContainer>
    </div>
  );
};

export default Destination;
