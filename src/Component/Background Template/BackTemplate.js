import React from "react";
import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  background: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  @media screen and (max-width: 768px) {
    height: 100%;
    background: url(${(props) => props.tablet});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 375px) {
    background: url(${(props) => props.mobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
`;

const BackTemplate = ({ children, desktop, mobile, tablet }) => {
  return (
    <>
      <Background img={desktop} tablet={tablet} mobile={mobile}>
        {children}
      </Background>
    </>
  );
};

export default BackTemplate;
