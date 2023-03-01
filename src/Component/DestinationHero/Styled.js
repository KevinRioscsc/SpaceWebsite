import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DestinationContainer = styled.div`
  padding: 100px 150px;
  color: white;
  display: flex;
  flex-direction: column;

  gap: 100px;
`;
export const Title = styled.div`
  font-size: 28px;
  display: flex;
  gap: 20px;
`;
export const PlanetInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 100px;
`;
export const PlanetPhoto = styled.img`
  width: 445px;
  @media screen and (max-width: 1250px) {
    width: 245px;
  }
  @media screen and (max-width: 877px) {
    width: 145px;
  }
`;
export const PlanetDescr = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const NavigationPlanet = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 40px;
`;
export const PlanetFacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const PlanetName = styled.div`
  font-family: "Bellefair", serif;
  font-size: 100px;
`;
export const PlanetP = styled.div`
  color: #d0d6f9;
  font-family: "Barlow", sans-serif;
  line-height: 32px;
  font-size: 18px;
`;
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #383b4b;
`;
export const PlanetTravel = styled.div`
  display: flex;
  gap: 50px;
`;
export const Distance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DistanceTitle = styled.div`
  color: #d0d6f9;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  letter-spacing: 2.36px;
`;
export const ActualDistance = styled.div`
  font-family: "Bellefair", serif;
  font-size: 28px;
`;
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TimeTitle = styled.div`
  color: #d0d6f9;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  letter-spacing: 2.36px;
`;
export const ActualTime = styled.div`
  font-family: "Bellefair", serif;
  font-size: 28px;
`;
export const Number = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  opacity: 0.25;
  letter-spacing: 4.75px;
`;
export const TitleName = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 4.75px;
`;
export const PlanetLi = styled.li`
  list-style: none;
`;
export const PlanetLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  color: #d0d6f9;
  letter-spacing: 2.7px;
  padding-bottom: 15px;
  transition: all 0.2s ease-in-out;
  border-bottom: 3px solid rgb(255, 255, 255, 0);
  &:hover {
    border-bottom: 3px solid rgb(255, 255, 255, 0.5);
  }
  &.active {
    color: white;
    border-bottom: 3px solid white;
  }
`;
export const PlanetWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;
