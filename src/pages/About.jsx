import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <main id="about">
      <span className="menu">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <h3>ABOUT</h3>
    </main>
  );
};

export default About;
