import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import works from "../data/works";

const Works = ({ navigatorVisible, changeVisibility }) => {
  const [modalData, setModalData] = React.useState({});
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <main id="works">
        <span className="menu" onClick={changeVisibility}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <h3>WORKS</h3>
        <section>
          {works.map((work) => (
            <Card
              key={work.id}
              data={work}
              setModalVisible={setModalVisible}
              setModalData={setModalData}
            />
          ))}
        </section>
      </main>
      <Modal
        visible={modalVisible}
        data={modalData}
        setVisible={setModalVisible}
      />
    </>
  );
};

export default Works;
