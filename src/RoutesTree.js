import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import DestinationPage from "./Pages/DestinationPage";
import TechPage from "./Pages/TechPage";

const RoutesTree = () => {
  let { id } = useParams();
  return (
    <>
      {console.log(id)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/Technology" element={<TechPage />} />
      </Routes>
    </>
  );
};

export default RoutesTree;
