import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigator from "../components/Navigator";
import About from "./About";
import Home from "./Home";
import Works from "./Works";

const BaseLayout = () => {
  return (
    <>
      <Navigator.Side />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default BaseLayout;
