import React, {useState, useEffect} from "react"; 
import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css"
import "../Style/ItemDetail.css"
import { foodItems } from "../Data/FoodItems"; 

function ItemDetailPage() {

    let { id } = useParams(); // Access the ID parameter from the URL 
    const specificFoodItem = foodItems.find(foodItem => foodItem.id === parseInt(id)) || null; 

    return (
        <>
        <div className="black-background">
        <div className="navbar">
            <React.Fragment><Navbar /></React.Fragment>
        </div>
        <div className="content">
                    {specificFoodItem && (
                        <>
                            <h1>{specificFoodItem.Name}</h1>
                            {/* Display other details of the specific food item */}
                        </>
                    )}
                    {!specificFoodItem && (
                        <h1>Food item not found</h1>
                    )}
                </div>
        </div>
        </>
    )

}

export default ItemDetailPage;