import { Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";

const Allroutes = () => {
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Allroutes;
