import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigator from "../components/Navigator";
import About from "./About";
import Home from "./Home";
import Works from "./Works";

const BaseLayout = () => {
  const [navigatorVisible, setNavigatorVisible] = React.useState(false);

  const _changeVisibility = () => {
    setNavigatorVisible(!navigatorVisible);
  };

  return (
    <>
      <Navigator.Side
        visible={navigatorVisible}
        changeVisibility={_changeVisibility}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              navigatorVisible={navigatorVisible}
              changeVisibility={_changeVisibility}
            />
          }
        ></Route>
        <Route
          path="/works"
          element={
            <Works
              navigatorVisible={navigatorVisible}
              changeVisibility={_changeVisibility}
            />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <About
              navigatorVisible={navigatorVisible}
              changeVisibility={_changeVisibility}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default BaseLayout;
