import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85vh;
  padding: 0px 150px;
`;
export const Headlines = styled.div`
  color: white;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const PreTitle = styled.div`
  align-self: flex-start;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.75px;
  color: #d0d6f9;
`;
export const Title = styled.div`
  font-family: "Bellefair", serif;
  font-size: 150px;
`;
export const DESCRIPTION = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  color: #d0d6f9;
  line-height: 32px;
`;
export const CALLTOACTION = styled.div`
  height: 274px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  background: white;
  border-radius: 500px;
  font-family: "Bellefair", serif;
  font-size: 32px;
  cursor: pointer;
  border: 1px solid white;
  color: #0b0d17;
  z-index: 99;
  position: relative;
  &::before {
    content: "";
    z-index: 0;
    position: absolute;
    height: 274px;
    width: 274px;
    background: transparent;
    border: 1px solid #272727a2;
    border-radius: 500px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
    border: 70px solid #272727;
  }
`;
