import React from "react"; 
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css"
import "../Style/Menu.css"
import { foodItems } from "../Data/FoodItems"; 
import steakFries from "../Images/SteakFries.jpg"
import { Link } from 'react-router-dom';

function MenuPage() {
    // Find the specific food item
    const specificFoodItem = foodItems.find(foodItem => foodItem.id === 2) || null; 
    const Soups = foodItems.filter(foodItem => foodItem.Course === "Soups");
    const Appetizers = foodItems.filter(foodItem => foodItem.Course === "Appetizers");
    const Salad = foodItems.filter(foodItem => foodItem.Course === "Salad");
    const Fish = foodItems.filter(foodItem => foodItem.Course === "Fish");
    const MainCourse = foodItems.filter(foodItem => foodItem.Course === "Main course");
    const PalateCleasner = foodItems.filter(foodItem => foodItem.Course === "Palate cleanser");
    const Dessert = foodItems.filter(foodItem => foodItem.Course === "Desserts");
    const Drinks = foodItems.filter(foodItem => foodItem.Course === "Drinks");


    return (
        
        <>
        <div className="black-background">
            <div className="navbar">
                <React.Fragment><Navbar /></React.Fragment>
            </div>
            <div className="contentMenuPage">
                <div className="search-bar">
                        Search menu:&nbsp;&nbsp;
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="menu">
                    <div className="courses">
                        <div className="courses-header">
                            Courses
                        </div>
                        <div className="courses-list">
                            <ul>
                                <li>Soups</li>
                                <li>Appetizers</li>
                                <li>Salad</li>
                                <li>Fish</li>
                                <li>Main course</li>
                                <li>Palate cleanser</li>
                                <li>Dessert</li>
                                <li>Drinks</li>
                            </ul>
                        </div>
                        <div className="key-header">
                            Key
                        </div>
                        <div className="key-list">
                            <ul>
                                <li>V = Vegetarian</li>
                                <li>AF = Alcohol free</li>                               
                            </ul>
                        </div>
                    </div>
                    <div className="menu-items">
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Soups
                            </div>
                            <div className="food-items-courses-items">
                                {Soups.map((item, index) => (
                                    <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                        <div className="menu-item-card" key={index}>
                                            <img src={steakFries} alt={item.Name} />
                                            <div className="menu-item-details">
                                                <h3>{item.Name}</h3>
                                                <p>{item.Description}</p>
                                                <div className="price-key">
                                                    <p>Price: ${item.Price}</p>
                                                    <p>{item.Key}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>                           
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Appetizers
                            </div>
                            <div className="food-items-courses-items">
                                {Appetizers.map((item, index) => (
                                    <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                        <div className="menu-item-card" key={index}>
                                            <img src={steakFries} alt={item.Name} />
                                            <div className="menu-item-details">
                                                <h3>{item.Name}</h3>
                                                <p>{item.Description}</p>
                                                <p>Price: ${item.Price}</p>
                                            </div>
                                        </div>
                                    </Link>                            
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Salad
                            </div>
                            <div className="food-items-courses-items">
                                {Salad.map((item, index) => (
                                <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                    <div className="menu-item-card" key={index}>
                                        <img src={steakFries} alt={item.Name} />
                                        <div className="menu-item-details">
                                            <h3>{item.Name}</h3>
                                            <p>{item.Description}</p>
                                            <p>Price: ${item.Price}</p>
                                        </div>
                                    </div>
                                </Link>                            
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Fish
                            </div>
                            <div className="food-items-courses-items">
                                {Fish.map((item, index) => (
                                    <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                        <div className="menu-item-card" key={index}>
                                            <img src={steakFries} alt={item.Name} />
                                            <div className="menu-item-details">
                                                <h3>{item.Name}</h3>
                                                <p>{item.Description}</p>
                                                <p>Price: ${item.Price}</p>
                                            </div>
                                        </div>
                                    </Link>                         
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Main Course
                            </div>
                            <div className="food-items-courses-items">
                                {MainCourse.map((item, index) => (
                                <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                    <div className="menu-item-card" key={index}>
                                        <img src={steakFries} alt={item.Name} />
                                        <div className="menu-item-details">
                                            <h3>{item.Name}</h3>
                                            <p>{item.Description}</p>
                                            <p>Price: ${item.Price}</p>
                                        </div>
                                    </div>
                                </Link>                              
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Palate Cleasner
                            </div>
                            <div className="food-items-courses-items">
                                {PalateCleasner.map((item, index) => (
                                <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                    <div className="menu-item-card" key={index}>
                                        <img src={steakFries} alt={item.Name} />
                                        <div className="menu-item-details">
                                            <h3>{item.Name}</h3>
                                            <p>{item.Description}</p>
                                            <p>Price: ${item.Price}</p>
                                        </div>
                                    </div>
                                </Link>                              
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Desserts
                            </div>
                            <div className="food-items-courses-items">
                                {Dessert.map((item, index) => (
                                <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                    <div className="menu-item-card" key={index}>
                                        <img src={steakFries} alt={item.Name} />
                                        <div className="menu-item-details">
                                            <h3>{item.Name}</h3>
                                            <p>{item.Description}</p>
                                            <p>Price: ${item.Price}</p>
                                        </div>
                                    </div>
                                </Link>                         
                                ))}
                            </div>
                        </div>
                        <div className="food-items-courses">
                            <div className="food-items-courses-header">
                                Drinks
                            </div>
                            <div className="food-items-courses-items">
                                {Drinks.map((item, index) => (
                                <Link className="food-link" to={`/ItemDetail/${item.id}`} key={index}>
                                    <div className="menu-item-card" key={index}>
                                        <img src={steakFries} alt={item.Name} />
                                        <div className="menu-item-details">
                                            <h3>{item.Name}</h3>
                                            <p>{item.Description}</p>
                                            <p>Price: ${item.Price}</p>
                                        </div>
                                    </div>
                                </Link>                            
                                ))}
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        </>
    )
}

export default MenuPage;
