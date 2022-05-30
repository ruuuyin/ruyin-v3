import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import Carousel from "./Carousel";

const Modal = ({ visible, data, setVisible }) => {
  const { title, sub, tech, img } = data;
  return (
    <div className={`modal ${visible === true ? "visible" : ""}`}>
      <span className="close" onClick={() => setVisible(false)}>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </span>
      <div id="content">
        <h3>{title}</h3>

        <div className="tags">
          {tech && tech.map((item, index) => <span key={index}>{item}</span>)}
        </div>
        <span className="sub">{sub}</span>
      </div>
      <div id="image">
        {/* <Carousel images={img} /> */}
        {img && img.map((src) => <img src={src} alt="" />)}
      </div>
    </div>
  );
};

export default Modal;
