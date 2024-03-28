import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import PopupNotification from "../Components/PopupNotification";
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css";
import "../Style/ItemDetail.css";
import { foodItems } from "../Data/FoodItems";
import { addOns } from "../Data/FoodItems";
import steakFries from "../Images/SteakFries.jpg";
import { Order1, Order2, Order3, Order4, Order5 } from "../Data/Orders";

function ItemDetailPage() {
  let { id } = useParams(); // Access the ID parameter from the URL
  const specificFoodItem =
    foodItems.find((foodItem) => foodItem.id === parseInt(id)) || null;
  const [orderNumberToFill, setOrdernumber] = useState();
  const [sidesToAdd, setSidesToAdd] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();
  const [sides, setSides] = useState([]);
  const [addedToOrder, setAddedToOrder] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // Successfully added button logic:

  const confirmationMsg = {
    text: "Item added! Go to orders tab to confirm your order",
    theme: {
      backgroundColor: "green",
      color: "white",
    },
  };
  useEffect(() => {
    const orderArrays = [Order1, Order2, Order3, Order4, Order5];

    for (let i = 0; i < orderArrays.length; i++) {
      let totalOrderPrice = 0;
      const orderArray = orderArrays[i];
      const orderNotPlaced = orderArray.find((order) => order.id === 1);
      if (orderNotPlaced.OrderStatus === "Order has not been placed yet") {
        setOrdernumber(orderNotPlaced.OrderNumber);
        break;
      }
    }
    const sidesIdArray = specificFoodItem.AddOns.split(",");
    const sideArray = addOns.filter((addon) => {
      return sidesIdArray.includes(addon.id.toString());
    });
    setSides(sideArray);
    setPrice(specificFoodItem.Price);
  }, []);
  const handleAddToOrder = () => {
    const orderArrays = [Order1, Order2, Order3, Order4, Order5];
    for (let i = 0; i < orderArrays.length; i++) {
      const orderArray = orderArrays[i];
      if (orderArray[1].OrderNumber === orderNumberToFill) {
        for (let j = 0; j < orderArray.length; j++) {
          const OrderToCheck = orderArray[j];
          if (OrderToCheck.ItemName === "") {
            OrderToCheck.ItemName = specificFoodItem.Name;
            OrderToCheck.ItemTotalQuantity = quantity;
            OrderToCheck.ItemPrice = specificFoodItem.Price;
            OrderToCheck.ItemTotalPrice = price;
            OrderToCheck.ItemCustomizations = sidesToAdd.join(", ");
            break;
          }
        }
      }
    }
    setAddedToOrder(true);
    setShowPopup(true);
  };
  function handleCheckboxChange(event) {
    const { checked, value } = event.target;
    if (checked) {
      // If the checkbox is checked, add its value to sidesToAdd
      setSidesToAdd((prevSides) => [...prevSides, value]);
    } else {
      // If the checkbox is unchecked, remove its value from sidesToAdd
      setSidesToAdd((prevSides) => prevSides.filter((side) => side !== value));
    }
  }
  const closePopup = () => {
    setShowPopup(false);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      const priceAsNumber = parseFloat(price) || 0;
      const foodItemPriceAsNumber = parseFloat(specificFoodItem.Price) || 0;

      // Perform arithmetic operation and format the result to two decimal places
      const newPrice = priceAsNumber - foodItemPriceAsNumber;
      setPrice(newPrice.toFixed(2));
    }
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    // Convert price and specificFoodItem.Price to numbers, defaulting to 0 if they are not valid numbers
    const priceAsNumber = parseFloat(price) || 0;
    const foodItemPriceAsNumber = parseFloat(specificFoodItem.Price) || 0;

    // Perform arithmetic operation and format the result to two decimal places
    const newPrice = priceAsNumber + foodItemPriceAsNumber;
    setPrice(newPrice.toFixed(2));
  };

  return (
    <>
      <div className="black-background">
        <div className="navbar">
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        </div>
        <PopupNotification
          message={confirmationMsg}
          showPopup={showPopup}
          closePopup={closePopup}
        />
        {/** Item details columns */}
        <div class="container">
          <div class="column">
            {/** Column 1*/}

            <div className="content">
              {specificFoodItem && (
                <>
                  <div className="itemName">
                    {" "}
                    <h1>{specificFoodItem.Name}</h1>{" "}
                  </div>

                  {/* Display other details of the specific food item */}
                </>
              )}
              {!specificFoodItem && <h1>Food item not found</h1>}

              {/* Placeholder for specific image*/}

              <img src={steakFries} alt={specificFoodItem.Name} />

              {/* Description */}

              <div class="inner2">
                <b> Description </b>
              </div>
              {specificFoodItem && (
                <>
                  <p className="item-description">
                    {specificFoodItem.Description}
                  </p>
                  {/* Display other details of the specific food item */}
                </>
              )}
              {!specificFoodItem && <h1>Food item not found</h1>}

              {/* Ingredients */}

              <div class="inner2">
                <b> Ingridients </b>
              </div>
              {specificFoodItem && (
                <>
                  <p className="item-description">
                    {specificFoodItem.Ingridients}
                  </p>
                  {/* Display other details of the specific food item */}
                </>
              )}
              {!specificFoodItem && <h1>Food item not found</h1>}
            </div>
          </div>
          <div class="column2">
            {/** Column 2*/}
            {/* <div className="itemName"> <h1>Customize your order!</h1> </div> */}

            <div class="container2">
              <div class="options">
                <div class="inner3">
                  <b> Add sides: </b>
                </div>
                {sides &&
                  Array.isArray(sides) &&
                  sides.map((addon) => (
                    <div className="addon" key={addon.id}>
                      <input
                        type="checkbox"
                        id="left-side"
                        name="left-side"
                        value={addon.Name}
                        className="bigger-checkbox"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={addon.Name} className="addon-content">
                        {addon.Name}
                      </label>
                    </div>
                  ))}
                <div class="comment-box">
                  <div class="inner4">
                    <b>Special instructions:</b>
                  </div>
                  <textarea
                    id="comments"
                    name="comments"
                    placeholder="Add special instructions..."
                  ></textarea>
                </div>
              </div>

              <div class="quantity-price">
                <div class="quantity">
                  <div class="inner6">
                    <b> Quantity</b>
                  </div>
                  <div className="quantity-controls">
                    <button className="buttonq" onClick={decrement}>
                      -
                    </button>
                    <span id="total" className="totalq">
                      {quantity}
                    </span>
                    <button className="buttonq" onClick={increment}>
                      +
                    </button>
                  </div>
                </div>

                <div class="quantity">
                  <div className="quantity-controls">
                    <h1 class="pricey">${price}</h1>
                  </div>
                </div>
              </div>
              {/* Add to Order and Go to Order*/}
              <div className="add-go-to-order-buttons">
                <div>
                  {!addedToOrder && (
                    <button className="add-to-order" onClick={handleAddToOrder}>
                      Add to Order
                    </button>
                  )}
                </div>
                {addedToOrder && (
                  <div>
                    <Link to="/Order">
                      <button className="go-to-order">Go to Order</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailPage;
