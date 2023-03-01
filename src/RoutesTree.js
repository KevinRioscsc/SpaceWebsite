import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import DestinationPage from "./Pages/DestinationPage";
import TechPage from "./Pages/TechPage";
import { useNavigate } from "./Component/Context/navigationGuide";

const RoutesTree = () => {
  const { getID } = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<DestinationPage />}></Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/Technology" element={<TechPage />} />
      </Routes>
    </>
  );
};

export default RoutesTree;
