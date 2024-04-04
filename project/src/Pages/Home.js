import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css";
import "../Style/Home.css";
import videoBG from "../Videos/HomePageVideo.mp4";

import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <video className="Video" src={videoBG} autoPlay muted loop playsInline />
      <motion.div
        initial={{ opacity: 0, height: "100vh" }}
        animate={{ opacity: 1, height: "85vh" }}
        exit={{ opacity: 0, height: "100vh" }}
        transition={{ duration: 0.5 }}
      >
        <div className="center-buttons">
          <Link to="/Menu">
            <button className="browse-menu-button">Browse Menu</button>
          </Link>
          <Link to="/AboutUs">
            <button className="about-us-button">About Us</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
