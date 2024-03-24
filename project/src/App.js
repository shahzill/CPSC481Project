import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import MenuPage from "./Pages/Menu";
import OrderPage from "./Pages/Order";
import ItemDetailPage from "./Pages/ItemDetail";
import PaymentPage from "./Pages/Payment";
import PopupNotification from "./Components/PopupNotification";

function App() {
  const [popupMessage, setPopupMessage] = useState({
    text: "",
    theme: { backgroundColor: "", color: "" },
  });
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage({
      text: "",
      theme: {
        backgroundColor: "",
        color: "",
      },
    });
  };

  useEffect(() => {
    // Function to check for stored popup message
    const checkStoredPopupMessage = () => {
      const storedPopupMessage = JSON.parse(
        localStorage.getItem("popupMessage")
      );
      if (storedPopupMessage) {
        setPopupMessage({
          text: storedPopupMessage,
          theme: { backgroundColor: "green", color: "white" },
        });
        setShowPopup(true);

        // Clear local storage after 3 seconds
        setTimeout(() => {
          localStorage.removeItem("popupMessage");
        }, 3000);
      }
    };

    // Check for stored popup message initially
    checkStoredPopupMessage();

    // Check for stored popup message every second
    const intervalId = setInterval(checkStoredPopupMessage, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run once on component mount

  return (
    <>
      <PopupNotification
        message={popupMessage}
        showPopup={showPopup}
        closePopup={closePopup}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailPage />} />
          <Route path="/Order" element={<OrderPage />} />
          <Route path="/Payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
