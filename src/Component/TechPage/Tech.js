import React from "react";
import {
  TechWrapper,
  Title,
  Num,
  PageDescr,
  TechFlex,
  Navigation,
  Li,
  LinksA,
  TechInfo,
  TechName,
  TechDescr,
  TechPhoto,
  TechTitle,
} from "./styled";
import techPhoto from "../../Downloads/assets/technology/image-launch-vehicle-portrait.jpg";

const Tech = () => {
  return (
    <>
      <TechWrapper>
        <Title>
          <Num>03</Num>
          <PageDescr>SPACE LAUNCH 101</PageDescr>
        </Title>
        <TechFlex>
          <Navigation>
            <Li>
              <LinksA>1</LinksA>
            </Li>
            <Li>
              <LinksA>2</LinksA>
            </Li>
            <Li>
              <LinksA>3</LinksA>
            </Li>
          </Navigation>
          <TechInfo>
            <TechTitle>THE TERMINOLOGY ...</TechTitle>
            <TechName>LAUNCH VEHICLE</TechName>
            <TechDescr>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </TechDescr>
          </TechInfo>
          <TechPhoto src={techPhoto} alt="technology photo"></TechPhoto>
        </TechFlex>
      </TechWrapper>
    </>
  );
};

export default Tech;
