import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import DestinationPage from "./Pages/DestinationPage";
import TechPage from "./Pages/TechPage";
import { useNavigate } from "./Component/Context/navigationGuide";

const RoutesTree = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/destination" element={<DestinationPage />}>
          <Route path=":id" element={<DestinationPage />} />
        </Route>
        <Route exact path="/crew" element={<Crew />}>
          <Route path=":id" element={<Crew />} />
        </Route>
        <Route exact path="/technology" element={<TechPage />}>
          <Route path=":id" element={<TechPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesTree;
