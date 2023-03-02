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

const Tech = (props) => {
  const { description, images, name } = props;
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
              <LinksA to={"/technology/Launch vehicle"}>1</LinksA>
            </Li>
            <Li>
              <LinksA to={"/technology/Spaceport"}>2</LinksA>
            </Li>
            <Li>
              <LinksA to={"/technology/Space capsule"}>3</LinksA>
            </Li>
          </Navigation>
          <TechInfo>
            <TechTitle>THE TERMINOLOGY ...</TechTitle>
            <TechName>{name.toUpperCase()}</TechName>
            <TechDescr>{description}</TechDescr>
          </TechInfo>
          <TechPhoto src={images.portrait} alt="technology photo"></TechPhoto>
        </TechFlex>
      </TechWrapper>
    </>
  );
};

export default Tech;
