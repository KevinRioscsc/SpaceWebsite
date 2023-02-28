import React from "react";
import logo from "../../Downloads/assets/shared/logo.svg";
import { Link } from "react-router-dom";
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
            <Link to={"/"}>
              <ATag>
                <Num>00</Num>
                <Name>HOME</Name>
              </ATag>
            </Link>
          </LinksLi>
          <LinksLi>
            <Link to={"/destination"}>
              <ATag>
                <Num>01</Num>
                <Name>DESTINATION</Name>
              </ATag>
            </Link>
          </LinksLi>
          <LinksLi>
            <Link to={"/crew"}>
              <ATag>
                <Num>02</Num>
                <Name>CREW</Name>
              </ATag>
            </Link>
          </LinksLi>
          <LinksLi>
            <Link to={"/technology"}>
              <ATag>
                <Num>03</Num>
                <Name>TECHNOLOGY</Name>
              </ATag>
            </Link>
          </LinksLi>
        </LinksContainer>
      </NavigationContain>
    </>
  );
};

export default Naviagtion;
