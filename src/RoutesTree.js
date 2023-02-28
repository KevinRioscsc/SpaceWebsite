import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const RoutesTree = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RoutesTree;
