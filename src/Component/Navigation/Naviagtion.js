import React, { useState } from "react";
import logo from "../../Downloads/assets/shared/logo.svg";
import hamburger from "../../Downloads/assets/shared/icon-hamburger.svg";
import {
  NavigationContain,
  Logo,
  LinksContainer,
  Line,
  LinksLi,
  Num,
  Name,
  LinkTo,
  Ham,
} from "./Styled";
import { useNavigate } from "../Context/navigationGuide";
import SideNav from "./Hamburger/SideNav";
//reduce LinksLi by iterating thru a data array
const Naviagtion = () => {
  const [active, setActive] = useState(false);
  const { setGETID } = useNavigate();
  return (
    <>
      <NavigationContain>
        <Logo src={logo} height={50}></Logo>
        <Ham src={hamburger} height={30} onClick={() => setActive(true)}></Ham>
        <SideNav active={active} setActive={setActive} />
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
