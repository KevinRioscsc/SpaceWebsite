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
  Landscape,
  Box,
} from "./styled";
//
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
          <Box>
            <Landscape src={images.landscape} alt={`${name} image`}></Landscape>
          </Box>
          <Navigation>
            <Li>
              <LinksA
                to={"/technology"}
                isactive={name === "Launch vehicle" ? true : false}
              >
                1
              </LinksA>
            </Li>
            <Li>
              <LinksA
                to={"/technology/Spaceport"}
                isactive={name === "Spaceport" ? true : false}
              >
                2
              </LinksA>
            </Li>
            <Li>
              <LinksA
                to={"/technology/Space capsule"}
                isactive={name === "Space capsule" ? true : false}
              >
                3
              </LinksA>
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
