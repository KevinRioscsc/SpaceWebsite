import React from "react";
import close from "../../../Downloads/assets/shared/icon-close.svg";
import styled from "styled-components";
import { useNavigate } from "../../Context/navigationGuide";
import { Link } from "react-router-dom";

const SideContainer = styled.div`
  display: none;
  @media screen and (max-width: 588px) {
    display: unset;
    position: absolute;
    width: 254px;
    right: ${(props) => (props.active ? "0" : "-254px")};
    visibility: ${(props) => (props.active ? "unset" : "hidden")};
    opacity: ${(props) => (props.active ? "1" : "0")};
    top: 0;
    background: rgb(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);
    height: 100%;
    z-index: 9999;
    transition: all 0.2s ease-in-out;
  }
`;
const Close = styled.img`
  height: 20px;
  width: 20px;
  position: absolute;
  cursor: pointer;
  right: 10%;
  top: 2%;
`;
const Padding = styled.div`
  color: white;
  padding: 169px 92px 0px 32px; //b r t l
`;
const LinkTitle = styled(Link)`
  display: flex;
  gap: 11px;
  margin-bottom: 32px;
  cursor: pointer;
`;
const Num = styled.div`
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  font-weight: 700;
`;
const Name = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
`;

const SideNav = ({ active, setActive }) => {
  const { setGETID } = useNavigate();
  return (
    <>
      <SideContainer active={active}>
        <Close src={close} onClick={() => setActive(false)}></Close>
        <Padding>
          <LinkTitle to={"/"} onClick={() => setGETID("Home")}>
            <Num>00</Num>
            <Name>HOME</Name>
          </LinkTitle>
          <LinkTitle
            to={"/destination"}
            onClick={() => setGETID("Destination")}
          >
            <Num>01</Num>
            <Name>DESTINATIOM</Name>
          </LinkTitle>
          <LinkTitle to={"/crew"} onClick={() => setGETID("Crew")}>
            <Num>02</Num>
            <Name>CREW</Name>
          </LinkTitle>
          <LinkTitle to={"/technology"} onClick={() => setGETID("Technology")}>
            <Num>03</Num>
            <Name>TECHNOLOGY</Name>
          </LinkTitle>
        </Padding>
      </SideContainer>
    </>
  );
};

export default SideNav;
