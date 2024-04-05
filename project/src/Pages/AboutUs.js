import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import videoBG from "../Videos/Video6.mp4";
import "../Style/AboutUs.css";
import logo from "../Images/BG1.png";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <>
      <video className="Video" src={videoBG} autoPlay muted loop playsInline />
      <motion.div
        initial={{ opacity: 0, height: "100vh" }}
        animate={{ opacity: 1, height: "80vh" }}
        exit={{ opacity: 0, height: "100vh" }}
        transition={{ duration: 0.5 }}
      >
        <div className="top-50">
          <div className="About-us">
            <span>
              Welcome to Culinary Canvas, located in the vibrant heart of
              downtown Calgary. Here, every dish is a{" "}
              <span style={{ color: "#FFC125" }}>masterpiece</span> waiting to
              be savored. Our restaurant, a{" "}
              <span style={{ color: "#FFC125" }}>fine dining</span>{" "}
              establishment, transcends mere sustenance; it's an experience
              where <span style={{ color: "#FFC125" }}>flavors</span> and{" "}
              <span style={{ color: "#FFC125" }}>creativity</span> converge to
              delight your senses.
              <br />
              <br />
              At Culinary Canvas, we believe in the power of{" "}
              <span style={{ color: "#FFC125" }}>culinary artistry</span> to
              inspire, uplift, and create unforgettable dining experiences. Our
              talented <span style={{ color: "#FFC125" }}>chefs</span> are
              passionate about crafting dishes that not only tantalize your
              taste buds but also ignite your imagination. From innovative
              fusion creations to timeless classics with a modern twist, each
              dish on our menu is a carefully curated{" "}
              <span style={{ color: "#FFC125" }}>masterpiece</span>
              , designed to surprise and delight discerning palates. We source
              the finest ingredients, blend traditional techniques with
              contemporary flair, and pour our heart and soul into every plate
              we serve.
              <br />
              <br />
              Whether you're joining us for a casual lunch,{" "}
              <span style={{ color: "#FFC125" }}>intimate dinner</span>, or
              special celebration, we invite you to immerse yourself in the{" "}
              <span style={{ color: "#FFC125" }}>culinary journey</span> that is
              Culinary Canvas. Come explore the{" "}
              <span style={{ color: "#FFC125" }}>flavors</span>,{" "}
              <span style={{ color: "#FFC125" }}>textures</span>, and{" "}
              <span style={{ color: "#FFC125" }}>colors</span> that adorn our
              canvas – we promise an unforgettable{" "}
              <span style={{ color: "#FFC125" }}>fine dining experience</span>{" "}
              that will leave you craving more. Join us at Culinary Canvas,
              where every meal is a{" "}
              <span style={{ color: "#FFC125" }}>work of art</span> waiting to
              be discovered in downtown Calgary.
            </span>
          </div>
          <div className="logo-pic">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutUs;
