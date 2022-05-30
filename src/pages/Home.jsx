import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TextScramble from "../utils/TextScramble";
import profile from "./../assets/profile.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const phrases = [
    "Hi!",
    "I'm Ralph Royeen A. Lagumen",
    "and I am a Software Developer.",
  ];

  React.useEffect(() => {
    const el = document.querySelector(".text");
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  }, []);

  return (
    <main id="home">
      <span className="menu">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <img src={profile} alt="" />
      <h1 className="text"></h1>
    </main>
  );
};

export default Home;
