import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../Style/Navbar.css";
import PopupNotification from "../Components/PopupNotification";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/BG1.png";

function Navbar() {
  const navRef = useRef();
  const [navColor, setNavColor] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const location = useLocation();

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
      <Link className="imageLink" smooth to="/#">
        <img className="imageLink" src={logo} alt="logo" />
      </Link>

      <nav ref={navRef}>
        <div className="links">
          <Link
            className={`link ${location.pathname === "/" ? "active" : ""}`}
            smooth
            to="/"
          >
            Home
          </Link>
          <Link
            className={`link ${location.pathname === "/Menu" ? "active" : ""}`}
            smooth
            to="/Menu"
          >
            Menu
          </Link>
          <Link
            className={`link ${location.pathname === "/Order" ? "active" : ""}`}
            smooth
            to="/Order"
          >
            Order
          </Link>
          <Link
            className={`link ${
              location.pathname === "/Payment" ? "active" : ""
            }`}
            smooth
            to="/Payment"
          >
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
        <FontAwesomeIcon icon={faBell} />
        &nbsp; Call for assistance
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
