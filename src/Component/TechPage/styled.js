import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TechWrapper = styled.div`
  color: white;
  height: 85vh;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (max-width: 1222px) {
    padding-left: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 60px;
    padding-bottom: 60px;
  }
`;
export const Title = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 50px;
  font-size: 28px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Num = styled.div`
  letter-spacing: 4.72px;
  opacity: 0.25;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
`;
export const PageDescr = styled.div`
  letter-spacing: 4.72px;

  font-family: "Barlow Condensed", sans-serif;
`;
export const TechFlex = styled.div`
  //align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  gap: 70px;
  @media screen and (max-width: 845px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;
export const Navigation = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
export const Li = styled.li`
  list-style: none;
`;
export const LinksA = styled(NavLink)`
  font-family: "Bellefair", serif;
  height: 80px;
  width: 80px;
  background: ${(props) => (props.isactive ? "white" : "transparent")};
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: ${(props) => (props.isactive ? "black" : "white")};
  &:hover {
    border: 1px solid rgba(255, 255, 255);
  }
  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 24px;
  }
`;
export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 768px) {
    align-items: center;
    gap: 16px;
  }
`;
export const TechName = styled.div`
  font-family: "Bellefair", serif;
  font-size: 56px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
export const TechDescr = styled.div`
  font-family: "Barlow ", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  max-width: 444px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;
export const TechPhoto = styled.img`
  width: 525px;
  @media screen and (max-width: 1370px) {
    width: 425px;
  }
  @media screen and (max-width: 972px) {
    width: 325px;
  }
  @media screen and (max-width: 850px) {
    width: 225px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TechTitle = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
`;
export const Landscape = styled.img`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: unset;
    height: 310px;
    width: 100%;
  }
`;
export const Box = styled.div`
  display: none;
  height: 310px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: unset;
  }
`;
