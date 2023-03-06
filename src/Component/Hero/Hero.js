import React from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  Headlines,
  PreTitle,
  Title,
  DESCRIPTION,
  CALLTOACTION,
} from "./styled";
import { useNavigate } from "../Context/navigationGuide";
const Hero = () => {
  const { setGETID } = useNavigate();
  return (
    <>
      <HeroContainer>
        <Headlines>
          <PreTitle>SO, YOU WANT TO TRAVEL TO</PreTitle>
          <Title>SPACE</Title>
          <DESCRIPTION>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </DESCRIPTION>
        </Headlines>
        <Link to={"/destination"} onClick={() => setGETID("Destination")}>
          <CALLTOACTION>EXPLORE</CALLTOACTION>
        </Link>
      </HeroContainer>
    </>
  );
};

export default Hero;
