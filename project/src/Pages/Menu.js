import React from "react"; 
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css"
import "../Style/Menu.css"
import { foodItems } from "../Data/FoodItems"; 

function MenuPage() {
    // Find the specific food item
    const specificFoodItem = foodItems.find(foodItem => foodItem.id === 2) || null; 

    return (
        
        <>
        <div className="black-background">
        <div className="navbar">
            <React.Fragment><Navbar /></React.Fragment>
        </div>
        <div className="content">
            <h1>MenuPage</h1>

             {specificFoodItem && (
                <div>
                    <p>Specific Food Item: {specificFoodItem.Name}</p>
                </div>
            )} 
        </div>
        </div>
        </>
    )
}

export default MenuPage;
