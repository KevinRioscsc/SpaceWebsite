import React from "react";
import {
  CrewContainer,
  Title,
  Num,
  PageDescr,
  CrewInfo,
  CrewMember,
  CrewTitle,
  CrewName,
  CrewDesc,
  Navigation,
  Li,
  LinkA,
  CrewPhoto,
} from "./styled";
import douglas from "../../Downloads/assets/crew/image-douglas-hurley.png";

const CrewPage = () => {
  return (
    <>
      <CrewContainer>
        <Title>
          <Num>02</Num>
          <PageDescr>MEET YOUR CREW</PageDescr>
        </Title>
        <CrewInfo>
          <CrewMember>
            <CrewTitle>COMMANDER</CrewTitle>
            <CrewName>DOUGLAS HURLEY</CrewName>
            <CrewDesc>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </CrewDesc>
            <Navigation>
              <Li>
                <LinkA></LinkA>
              </Li>
              <Li>
                <LinkA></LinkA>
              </Li>
              <Li>
                <LinkA></LinkA>
              </Li>
              <Li>
                <LinkA></LinkA>
              </Li>
            </Navigation>
          </CrewMember>
          <CrewPhoto src={douglas} alt="astro photo"></CrewPhoto>
        </CrewInfo>
      </CrewContainer>
    </>
  );
};

export default CrewPage;
