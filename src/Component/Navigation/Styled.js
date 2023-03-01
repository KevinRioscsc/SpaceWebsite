import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 50px;
  height: 15vh;
`;
export const Logo = styled.img``;
export const LinksContainer = styled.ul`
  padding: 0px 0px 0px 100px; //b r t l
  height: 100px;
  width: 650px;
  display: flex;
  position: relative;
  align-items: center;
  backdrop-filter: blur(150px);
  gap: 40px;
`;
export const Line = styled.div`
  height: 1px;
  position: absolute;
  min-width: 473px;
  background: #979797;
  left: -58%;
  top: 50%;
  opacity: 0.94;
`;
export const LinksLi = styled.li`
  color: white;
  list-style: none;
  height: 100%;
`;
export const ATag = styled.a``;
export const Num = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2.7px;
`;
export const Name = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
`;
export const LinkTo = styled(NavLink)`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: rgb(255, 255, 255, 0.5021);
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  &.active::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: rgb(255, 255, 255);
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
`;
