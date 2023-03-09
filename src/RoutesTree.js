import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import DestinationPage from "./Pages/DestinationPage";
import TechPage from "./Pages/TechPage";
import { useNavigate } from "./Component/Context/navigationGuide";
import Naviagtion from "./Component/Navigation/Naviagtion";
import BackTemplate from "./Component/Background Template/BackTemplate";
import { backgrounds } from "./Downloads/backgroundData";

const RoutesTree = () => {
  const { getID } = useNavigate();

  const backgroundObj = backgrounds.find((prev) => prev.name === getID);
  return (
    <>
      <BackTemplate
        desktop={backgroundObj.desktop}
        mobile={backgroundObj.mobile}
        tablet={backgroundObj.tablet}
      >
        <Naviagtion />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destination" element={<DestinationPage />}>
            <Route exact path=":id" element={<DestinationPage />} />
          </Route>
          <Route exact path="/crew" element={<Crew />}>
            <Route exact path=":id" element={<Crew />} />
          </Route>
          <Route exact path="/technology" element={<TechPage />}>
            <Route exact path=":id" element={<TechPage />} />
          </Route>
        </Routes>
      </BackTemplate>
    </>
  );
};

export default RoutesTree;
