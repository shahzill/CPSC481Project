import React, {useState, useEffect} from "react"; 
import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css"

function PaymentPage() {
    return (
        <>
        <div className="navbar">
            <React.Fragment><Navbar /></React.Fragment>
        </div>
        <div className="content">
            <h1>PaymentPage</h1>
        </div>
        </>
    )

}

export default PaymentPage;