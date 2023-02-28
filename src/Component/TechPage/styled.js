import styled from "styled-components";

export const TechWrapper = styled.div`
  color: white;
  height: 85vh;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (max-width: 1145px) {
    padding-left: 60px;
  }
`;
export const Title = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 70px;
`;
export const Num = styled.div`
  font-size: 28px;
  letter-spacing: 4.72px;
  opacity: 0.25;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
`;
export const PageDescr = styled.div`
  font-size: 28px;
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
`;
export const Navigation = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Li = styled.li`
  list-style: none;
  height: 80px;
  width: 80px;
  background: transparent;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(255, 255, 255);
  }
`;
export const LinksA = styled.div`
  font-family: "Bellefair", serif;

  color: white;
`;
export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TechName = styled.div`
  font-family: "Bellefair", serif;
  font-size: 56px;
`;
export const TechDescr = styled.div`
  font-family: "Barlow ", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  max-width: 444px;
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
`;
export const TechTitle = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
`;
