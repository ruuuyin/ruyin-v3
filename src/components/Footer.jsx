import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "./../assets/logo/logo-black.svg";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="ruyin logo" />
      <div id="social">
        <a href="https://github.com/ruuuyin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/ruuuyin/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>ralphroyeenlagumen@gmail.com</p>
      <p>
        © Copyright {new Date().getFullYear()}. <br /> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
