import React from "react";
import {
  CrewContainer,
  Title,
  Num,
  PageDescr,
  CrewInfo,
  CrewMember,
  CrewTitle,
  CrewName,
  CrewDesc,
  Navigation,
  Li,
  LinkA,
  CrewPhoto,
} from "./styled";

const CrewPage = (props) => {
  const { name, bio, images, role } = props;
  return (
    <>
      <CrewContainer>
        <Title>
          <Num>02</Num>
          <PageDescr>MEET YOUR CREW</PageDescr>
        </Title>
        <CrewInfo>
          <CrewMember>
            <CrewTitle>{role.toUpperCase()}</CrewTitle>
            <CrewName>{name.toUpperCase()}</CrewName>
            <CrewDesc>{bio}</CrewDesc>
            <Navigation>
              <Li>
                <LinkA
                  to={`/crew`}
                  isactive={name === "Douglas Hurley" ? true : false}
                ></LinkA>
              </Li>
              <Li>
                <LinkA
                  to={`/crew/Mark Shuttleworth`}
                  isactive={name === "Mark Shuttleworth" ? true : false}
                ></LinkA>
              </Li>
              <Li>
                <LinkA
                  to={`/crew/Victor Glover`}
                  isactive={name === "Victor Glover" ? true : false}
                ></LinkA>
              </Li>
              <Li>
                <LinkA
                  to={`/crew/Anousheh Ansari`}
                  isactive={name === "Anousheh Ansari" ? true : false}
                ></LinkA>
              </Li>
            </Navigation>
          </CrewMember>
          <CrewPhoto src={images.png} alt="astro photo"></CrewPhoto>
        </CrewInfo>
      </CrewContainer>
    </>
  );
};

export default CrewPage;
