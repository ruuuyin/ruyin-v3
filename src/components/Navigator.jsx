import React from "react";
import { Link } from "react-router-dom";
import { HoverTextScramble } from "../utils/TextScramble";
import Footer from "./Footer";

const Side = () => {
  React.useEffect(() => {
    const el1 = document.querySelector(".text-scramble-home");
    const fx1 = new HoverTextScramble(el1);

    el1.addEventListener("mouseover", (e) => {
      fx1.setText("Home");
    });

    const el2 = document.querySelector(".text-scramble-works");
    const fx2 = new HoverTextScramble(el2);

    el2.addEventListener("mouseover", (e) => {
      fx2.setText("Works");
    });

    const el3 = document.querySelector(".text-scramble-about");
    const fx3 = new HoverTextScramble(el3);

    el3.addEventListener("mouseover", (e) => {
      fx3.setText("About");
    });
  }, []);
  return (
    <nav>
      <div className="links">
        <Link className="text-scramble-home" to="/">
          Home
        </Link>
        <Link className="text-scramble-works" to="works">
          Works
        </Link>
        <Link className="text-scramble-about" to="about">
          About
        </Link>
      </div>

      <Footer />
    </nav>
  );
};

const Navigator = {
  Side,
};

export default Navigator;
