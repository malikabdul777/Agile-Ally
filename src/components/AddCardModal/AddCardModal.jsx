// React

// Thirdparty
import Rodal from "rodal";
import "rodal/lib/rodal.css";

// Utils

// APISlices

// Slice

// CustomHooks

// Components

// Constants

// Enums

// Interfaces

// Styles
import styles from "./AddCardModal.module.css";
import { useState } from "react";

// Local enums

// Local constants

// Local Interfaces

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const customStyles = {
    background: "white",
    padding: "20px",
    width: "50%",
    top: "-3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };

  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className={styles.container}>
        <div>
          <span className={styles.label}>Title</span>
          <input
            type="text"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span>Detail</span>
          <textArea
            rows={10}
            className={styles.input}
            value={detail}
            type="text"
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <button
          disabled={title === "" && detail === ""}
          className={styles.saveButton}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail("");
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCardModal;
