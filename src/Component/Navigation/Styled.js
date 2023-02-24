import styled from "styled-components";

export const NavigationContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 0px 50px;
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
`;
export const ATag = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
`;
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
