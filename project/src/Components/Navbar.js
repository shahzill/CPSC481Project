import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../Style/Navbar.css";
import PopupNotification from "../Components/PopupNotification";

function Navbar() {
  const navRef = useRef();
  const [navColor, setNavColor] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);

  const changeBG = () => {
    if (window.scrollY >= 10) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  const confirmationMsg = {
    text: "A team member will be with you shortly to address your inquiry.",
    theme: {
      backgroundColor: "green",
      color: "white",
    },
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowPopupDelete(false);
  };

  function handleAssistanceRequest() {
    // Show notification
    setShowPopup(true);
    // You can also perform other actions here, such as sending a request to a server
  }

  window.addEventListener("scroll", changeBG);

  return (
    <header className="header">
      <Link
        className="link dancingScript"
        smooth
        to="/#"
        style={{ marginLeft: "10px" }}
      >
        Culinary Canvas
      </Link>

      <nav ref={navRef}>
        <div className="links">
          <Link className="link" smooth to="/">
            Home
          </Link>
          <Link className="link" smooth to="/Menu">
            Menu
          </Link>
          <Link className="link" smooth to="/Order">
            Order
          </Link>
          <Link className="link" smooth to="/Payment">
            Payment
          </Link>
          <Link className="link" smooth to="">
            About us
          </Link>
        </div>
      </nav>
      <button
        className="CallForAssistance"
        onClick={() => handleAssistanceRequest()}
      >
        Call for assistance
      </button>
      <PopupNotification
        message={confirmationMsg}
        showPopup={showPopup}
        closePopup={closePopup}
      />
    </header>
  );
}

export default Navbar;
