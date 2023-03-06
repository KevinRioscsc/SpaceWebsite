import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CrewContainer = styled.div`
  color: white;
  height: 85vh;
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1222px) {
    padding: 0px 60px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
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
export const CrewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 60px;
  }
`;
export const CrewMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    align-items: center;
    gap: 0;
  }
`;
export const CrewTitle = styled.div`
  font-size: 32px;
  font-family: "Bellefair", serif;
  opacity: 0.5042;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const CrewName = styled.div`
  font-size: 56px;
  font-family: "Bellefair", serif;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding-top: 8px;
  }
`;
export const CrewDesc = styled.div`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  padding-top: 20px;
  max-width: 444px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 16px;
    padding-top: 16px;
  }
`;
export const Navigation = styled.ul`
  display: flex;
  padding: 0;
  gap: 20px;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
`;
export const Li = styled.li`
  list-style: none;
`;
export const LinkA = styled(NavLink)`
  display: block;
  text-decoration: none;
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 100px;
  opacity: ${(props) => (props.isactive ? "1" : "0.1744")};
  transition: all 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.5001;
  }
`;
export const CrewPhoto = styled.img`
  width: 568.07px;
  align-self: flex-end;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 987px) {
    width: 468.07px;
  }
  @media screen and (max-width: 886px) {
    width: 350.07px;
  }
  @media screen and (max-width: 768px) {
    align-self: center;
    width: 456.37px;
  }
`;
