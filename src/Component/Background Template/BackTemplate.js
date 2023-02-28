import React from "react";
import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  background: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackTemplate = ({ children, img }) => {
  return (
    <>
      <Background img={img}>{children}</Background>
    </>
  );
};

export default BackTemplate;
