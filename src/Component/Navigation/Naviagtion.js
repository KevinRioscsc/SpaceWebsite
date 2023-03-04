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
import { useNavigate } from "../Context/navigationGuide";
//reduce LinksLi by iterating thru a data array
const Naviagtion = () => {
  const { setGETID } = useNavigate();
  return (
    <>
      <NavigationContain>
        <Logo src={logo} height={50}></Logo>
        <LinksContainer>
          <Line></Line>
          <LinksLi>
            <LinkTo to={"/"} activeClassName onClick={() => setGETID("Home")}>
              <Num>00</Num>
              <Name>HOME</Name>
            </LinkTo>
          </LinksLi>
          <LinksLi>
            <LinkTo
              defaultValue={"/destination/Moon"}
              to={"/destination"}
              activeClassName
              onClick={() => setGETID("Destination")}
            >
              <Num>01</Num>
              <Name>DESTINATION</Name>
            </LinkTo>
          </LinksLi>
          <LinksLi>
            <LinkTo
              to={"/crew"}
              activeClassName
              onClick={() => setGETID("Crew")}
            >
              <Num>02</Num>
              <Name>CREW</Name>
            </LinkTo>
          </LinksLi>
          <LinksLi>
            <LinkTo
              to={"/technology"}
              onClick={() => setGETID("Technology")}
              activeClassName
            >
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
