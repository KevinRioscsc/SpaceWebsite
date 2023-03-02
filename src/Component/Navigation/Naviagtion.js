import React from "react";
import logo from "../../Downloads/assets/shared/logo.svg";
import {
  NavigationContain,
  Logo,
  LinksContainer,
  Line,
  LinksLi,
  Num,
  Name,
  LinkTo,
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
            <LinkTo to={"/"} activeClassName>
              <Num>00</Num>
              <Name>HOME</Name>
            </LinkTo>
          </LinksLi>
          <LinksLi>
            <LinkTo
              defaultValue={"/destination/Moon"}
              to={"/destination"}
              activeClassName
            >
              <Num>01</Num>
              <Name>DESTINATION</Name>
            </LinkTo>
          </LinksLi>
          <LinksLi>
            <LinkTo to={"/crew"} activeClassName>
              <Num>02</Num>
              <Name>CREW</Name>
            </LinkTo>
          </LinksLi>
          <LinksLi>
            <LinkTo to={"/technology"} activeClassName>
              <Num>03</Num>
              <Name>TECHNOLOGY</Name>
            </LinkTo>
          </LinksLi>
        </LinksContainer>
      </NavigationContain>
    </>
  );
};

export default Naviagtion;
