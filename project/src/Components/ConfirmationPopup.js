import React, { useState, useEffect } from "react";
import "../Style/ConfirmationPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    onConfirm();
  };

  const handleCancel = () => {
    setConfirmed(false);
    onCancel();
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="confirmation-popup">
        <p>{message}</p>
        <button onClick={handleConfirm}>
          <FontAwesomeIcon icon={faCheck} />
          &nbsp;Confirm
        </button>
        <button onClick={handleCancel}>
          <FontAwesomeIcon icon={faX} />
          &nbsp;Cancel
        </button>
      </div>
    </>
  );
};

export default ConfirmationPopup;
