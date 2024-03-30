import React, { useState, useEffect } from "react";
import "../Style/ConfirmationPopup.css";

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
      <div className="confirmation-popup">
        <p>{message}</p>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
};

export default ConfirmationPopup;
