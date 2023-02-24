import React from "react";
import logo from "../../Downloads/assets/shared/logo.svg";
import {
  NavigationContain,
  Logo,
  LinksContainer,
  Line,
  LinksLi,
  ATag,
  Num,
  Name,
} from "./Styled";
//reduce LinksLi by iterating thru a data array
const Naviagtion = () => {
  return (
    <>
      <NavigationContain>
        <Logo src={logo} height={50}></Logo>
        <LinksContainer>
          <Line></Line>
          <LinksLi>
            <ATag>
              <Num>00</Num>
              <Name>HOME</Name>
            </ATag>
          </LinksLi>
          <LinksLi>
            <ATag>
              <Num>01</Num>
              <Name>DESTINATION</Name>
            </ATag>
          </LinksLi>
          <LinksLi>
            <ATag>
              <Num>02</Num>
              <Name>CREW</Name>
            </ATag>
          </LinksLi>
          <LinksLi>
            <ATag>
              <Num>03</Num>
              <Name>TECHNOLOGY</Name>
            </ATag>
          </LinksLi>
        </LinksContainer>
      </NavigationContain>
    </>
  );
};

export default Naviagtion;
