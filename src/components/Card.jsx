import React from "react";

const Card = ({ data, setModalData, setModalVisible }) => {
  const { title, sub } = data;

  const _cardOnClick = () => {
    setModalVisible(true);
    setModalData(data);
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={_cardOnClick}>
      <span className="card-title">{title}</span>
      <span className="card-sub">{sub}</span>
    </div>
  );
};

export default Card;
