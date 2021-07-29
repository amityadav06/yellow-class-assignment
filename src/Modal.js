import React from "react";
import { FaTimes } from "react-icons/fa";
import Slider from "./Slider";

const Modal = ({ closeModal, openModel, photos }) => {
  return (
    <div
      className={`${openModel ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div className="modal-container">
        <Slider photos={photos} />
        <button onClick={() => closeModal(false)} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
