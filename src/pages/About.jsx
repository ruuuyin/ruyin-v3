import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import resume from "./../assets/Resume.pdf";

const About = () => {
  return (
    <main id="about">
      <span className="menu">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <h3>ABOUT</h3>
      <p>
        I started coding when I was in Senior High as it is part of my
        minicourse. My very first programming language and still my favorite is
        Java. During my days in college, I've been doing a freelance work in
        software development where I developed a desktop app and web
        applications. As my personality, I am a hobbyist. I have a strong
        enthusiasm in doing different kind of things that piqued my interest.
        That's how I started to love programming. I enjoy building things and
        learning new technologies and practices along with the trend.
      </p>

      <h4>Technical Skills</h4>
      <div className="tags">
        <span>Java</span>
        <span>Spring Framework</span>
        <span>Hibernate ORM</span>
        <span>JavaFX & Swing</span>
        <span>Maven</span>
        <span>Gradle</span>
        <span>Microsoft Azure</span>
        <span>MySQL</span>
        <span>Oracle DB</span>
        <span>SQLite</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>NodeJs</span>
        <span>ReactJS</span>
        <span>React Native</span>
        <span>NativeBase</span>
        <span>Ant Design</span>
        <span>PHP</span>
        <span>Laravel</span>
        <span>Git & Github</span>
        <span>OOP</span>
        <span>Functional Programming</span>
        <span>Design Patterns</span>
        <span>Data Structure</span>
        <span>MVC</span>
        <span>Rest API</span>
        <span>Figma</span>
        <span>Photoshop</span>
        <span>Adobe XD</span>
      </div>
      <a href={resume}> Check my Resume</a>
    </main>
  );
};

export default About;
