import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css";
import "../Style/Menu.css";
import { foodItems } from "../Data/FoodItems";
import { Link } from "react-router-dom";
import { HashLink as ScrollLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

function MenuPage() {
  // Find the specific food item
  const [searchValue, setSearchValue] = useState("");
  const [Soups, setSoups] = useState([]);
  const [Appetizers, setAppetizers] = useState([]);
  const [Salad, setSalad] = useState([]);
  const [Fish, setFish] = useState([]);
  const [MainCourse, setMainCourse] = useState([]);
  const [PalateCleasner, setPalateCleasner] = useState([]);
  const [Dessert, setDessert] = useState([]);
  const [Drinks, setDrinks] = useState([]);

  useEffect(() => {
    updateFoodData();
  }, []);

  function updateFoodData() {
    console.log("calling usestate");
    if (searchValue != null && searchValue.length > 1) {
      console.log("calling usestate yesyyys");
      setSoups(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Soups" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setAppetizers(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Appetizers" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setSalad(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Salad" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setFish(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Fish" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setMainCourse(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Main course" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setPalateCleasner(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Palate cleanser" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setDessert(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Desserts" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setDrinks(
        foodItems.filter(
          (foodItem) =>
            foodItem.Course === "Drinks" &&
            foodItem.Name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setSoups(foodItems.filter((foodItem) => foodItem.Course === "Soups"));

      setAppetizers(
        foodItems.filter((foodItem) => foodItem.Course === "Appetizers")
      );

      setSalad(foodItems.filter((foodItem) => foodItem.Course === "Salad"));

      setFish(foodItems.filter((foodItem) => foodItem.Course === "Fish"));

      setMainCourse(
        foodItems.filter((foodItem) => foodItem.Course === "Main course")
      );

      setPalateCleasner(
        foodItems.filter((foodItem) => foodItem.Course === "Palate cleanser")
      );

      setDessert(
        foodItems.filter((foodItem) => foodItem.Course === "Desserts")
      );

      setDrinks(foodItems.filter((foodItem) => foodItem.Course === "Drinks"));
    }
  }
  const handleSearchChange = (event) => {
    // Update the width dynamically based on the input value
    const { value } = event.target;

    // Set the input value to the entered word
    setSearchValue(value);
    console.log(searchValue);
    updateFoodData();
  };

  return (
    <>
      <div className="black-background">
        <div className="navbar">
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        </div>
        <div className="contentMenuPage">
          <div className="search-bar">
            Search menu:&nbsp;&nbsp;
            <input
              type="text"
              style={{ width: "200px", height: "40px", fontSize: "20px" }}
              className="search-menu-bar"
              value={searchValue}
              placeholder="Search..."
              onChange={handleSearchChange}
            />
          </div>
          <div className="menu">
            <div className="courses">
              <div className="courses-header">Courses</div>
              <div className="courses-list">
                <ul>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#Soups"
                  >
                    <li>Soups</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#Appetizers"
                  >
                    <li>Appetizers</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#Salad"
                  >
                    <li>Salads</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#fish"
                  >
                    <li>Fish</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#MainCourse"
                  >
                    <li>Main courses</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#PalateCleanser"
                  >
                    <li>Palate cleansers</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#Desserts"
                  >
                    <li>Desserts</li>
                  </ScrollLink>
                  <ScrollLink
                    className="font-size-link-course"
                    smooth
                    to="#Drinks"
                  >
                    <li>Drinks</li>
                  </ScrollLink>
                </ul>
              </div>
              <div className="key-header">Key</div>
              <div className="key-list">
                <ul>
                  <li>V = Vegetarian</li>
                  <li>AF = Alcohol free</li>
                </ul>
              </div>
            </div>
            <div className="menu-items">
              <div className="food-items-courses">
                <div id="Soups" className="food-items-courses-header">
                  Soups
                </div>
                <div className="food-items-courses-items">
                  {Soups.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="Appetizers" className="food-items-courses-header">
                  Appetizers
                </div>
                <div className="food-items-courses-items">
                  {Appetizers.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="Salad" className="food-items-courses-header">
                  Salad
                </div>
                <div className="food-items-courses-items">
                  {Salad.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="fish" className="food-items-courses-header">
                  Fish
                </div>
                <div className="food-items-courses-items">
                  {Fish.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="MainCourse" className="food-items-courses-header">
                  Main Course
                </div>
                <div className="food-items-courses-items">
                  {MainCourse.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="PalateCleanser" className="food-items-courses-header">
                  Palate Cleanser
                </div>
                <div className="food-items-courses-items">
                  {PalateCleasner.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="Desserts" className="food-items-courses-header">
                  Desserts
                </div>
                <div className="food-items-courses-items">
                  {Dessert.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
                <div id="Drinks" className="food-items-courses-header">
                  Drinks
                </div>
                <div className="food-items-courses-items">
                  {Drinks.map((item, index) => (
                    <Link
                      className="food-link"
                      to={`/ItemDetail/${item.id}`}
                      key={index}
                    >
                      <div className="menu-item-card" key={index}>
                        <img src={item.ImageURL} alt={item.Name} />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
