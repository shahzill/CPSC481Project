import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css";
import "../Style/Home.css";
import videoBG from "../Videos/HomePageVideo.mp4";

function HomePage() {
    return (
        <>
             {/* <video className="Video" src={videoBG} autoPlay muted loop playsInline/>  */}
             <div className="black-background">
            <div className="navbar">
            <React.Fragment><Navbar /></React.Fragment>
            </div>
            <div className="contentHome">
                <div className="center-buttons">
                    <Link to="/Menu"><button className="browse-menu-button">Browse Menu</button></Link>
                    <Link to="/"><button className="about-us-button">About Us</button></Link>
                </div>
            </div>
            </div>
        </>
    );
}

export default HomePage;