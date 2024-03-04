import React, {useState, useEffect} from "react";
import { useRef } from "react";
import { HashLink as Link} from 'react-router-hash-link'
import "../Style/Navbar.css"

function Navbar() {
	const navRef = useRef();
	const [navColor,setNavColor] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const changeBG = () => {
		if(window.scrollY >= 10){
			setNavColor(true)
		}
		else{
			setNavColor(false)
		}
	}

	window.addEventListener('scroll', changeBG)

	return (
		<header className="header">
			<Link className="link" smooth to="/#" >Culinary Canvas</Link>
			<nav ref={navRef}>
                <div className="links">
                    <Link className="link" smooth to="/" >Home</Link>
                    <Link className="link" smooth to="/Menu" >Menu</Link>
                    <Link className="link" smooth to="/Order" >Order</Link>
                    <Link className="link" smooth to="/Payment" >Payment</Link>
                    <Link className="link" smooth to="" >About us</Link>
                </div>
			</nav>
			<button className="CallForAssistance" >Call for assistance</button>
		</header>
	);
}

export default Navbar;