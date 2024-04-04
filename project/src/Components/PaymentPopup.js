import React, { useState, useEffect } from "react";
import "../Style/ConfirmationPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

const PaymentPopup = ({ message, onConfirm, onCancel }) => {
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
        <h3>Payment in progress</h3>
        <h5>{message}</h5>
        <button onClick={handleConfirm}>
          <FontAwesomeIcon icon={faCheck} />
          &nbsp;(Simulate payment completion)
        </button>
        <button onClick={handleCancel}>
          <FontAwesomeIcon icon={faX} />
          &nbsp;Cancel
        </button>
      </div>
    </>
  );
};

export default PaymentPopup;
