import React, {useState, useEffect} from "react"; 
import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css"
import foodItems from "../Data/FoodItems";

const specificFoodItem = foodItems.find(foodItem => foodItem.id === 2);

function MenuPage() {
    return (
        <>
        <div className="navbar">
            <React.Fragment><Navbar /></React.Fragment>
        </div>
        <div className="content">
            <h1>MenuPage</h1>

            {specificFoodItem && (
                <p>Specific Food Item: {specificFoodItem.Name}</p>
            )}
        </div>
        </>
    )

}

export default MenuPage;