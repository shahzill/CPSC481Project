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
import PopupNotification from "../Components/PopupNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faBowlRice } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Style/Navbar.css";
import "../Style/Order.css";
import { Order1, Order2, Order3, Order4, Order5 } from "../Data/Orders";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [order1Total, setOrder1Total] = useState();
  const [order2Total, setOrder2Total] = useState();
  const [order3Total, setOrder3Total] = useState();
  const [order4Total, setOrder4Total] = useState();
  const [order5Total, setOrder5Total] = useState(0);
  const [TotalOrderPrice, setTotalOrderPrice] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const confirmationMsg = {
    text: "Order Confirmed",
    theme: {
      backgroundColor: "green",
      color: "white",
    },
  };

  useEffect(() => {
    updateOrderData();
  }, []);

  function updateOrderData(ordersParam = []) {
    let orderArrays;

    if (ordersParam === null || ordersParam.length === 0) {
      orderArrays = [Order1, Order2, Order3, Order4, Order5];
    } else {
      orderArrays = ordersParam;
    }
    let foundOrder = false;
    const newOrders = [];
    const orderTotalSetters = [
      setOrder1Total,
      setOrder2Total,
      setOrder3Total,
      setOrder4Total,
      setOrder5Total,
    ];
    let TotalPriceCalc = 0;

    for (let i = 0; i < orderArrays.length; i++) {
      let totalOrderPrice = 0;
      const orderArray = orderArrays[i];
      const orderNotPlaced = orderArray.find((order) => order.id === 1);
      newOrders.push(orderArray);

      const validItems = orderArray.filter((order) => order.ItemName !== "");

      // Calculate total price for valid items
      validItems.forEach((order) => {
        totalOrderPrice += parseFloat(order.ItemTotalPrice);
        TotalPriceCalc += parseFloat(order.ItemTotalPrice);
      });

      // Set total order price using the appropriate state setter from orderTotalSetters array
      orderTotalSetters[i](totalOrderPrice.toFixed(2));

      if (
        orderNotPlaced.OrderStatus === "Order has not been placed yet" &&
        foundOrder == false
      ) {
        foundOrder = true;

        if (orderNotPlaced.ItemName === "") {
          newOrders.pop(orderArray);
        }
        break;
      }
    }
    setOrders(newOrders);
    setTotalOrderPrice(TotalPriceCalc.toFixed(2));
  }

  const ConfirmOrder = (orderArray) => {
    const orderNumber = orderArray[0].OrderNumber;
    const orderToUpdate = orders.find(
      (order) => order[0].OrderNumber === orderNumber
    );
    if (orderToUpdate) {
      orderToUpdate.forEach((order) => {
        order.OrderStatus = "Order has been placed";
        order.OrderStatusTotal += " Order has been placed";
      });
    }
    setOrders([...orders]);
    setShowPopup(true);

    // Set timeout to update status after 1 minute
    setTimeout(() => {
      const updatedStatus = "Order has been confirmed"; // Simulated update
      orderToUpdate.forEach((order) => {
        order.OrderStatus = updatedStatus;
        order.OrderStatusTotal += ` ${updatedStatus}`;
      });
      setOrders([...orders]);
      localStorage.setItem(
        `popupMessage`,
        JSON.stringify(`Order ${orderNumber} has been confirmed`)
      );

      // Set another timer after the first one runs out
      setTimeout(() => {
        // Your code to be executed after the first timer
        orderToUpdate.forEach((order) => {
          order.OrderStatus = "Order is being prepared";
          order.OrderStatusTotal += `  Order is being prepared`;
        });
        setOrders([...orders]);
        localStorage.setItem(
          `popupMessage`,
          JSON.stringify(`Order ${orderNumber} is being prepared`)
        );
      }, 20000); // 20 seconds after the first timer ends
    }, 20000); // 20 seconds
    // Store order status in localStorage for automatic updates
  };

  function decrement(orderId, orderNumber) {
    // Find the order in orderArray and update its quantity
    const orderArrays = [Order1, Order2, Order3, Order4, Order5];
    for (let i = 0; i < orderArrays.length; i++) {
      const orderArray = orderArrays[i];
      if (orderArray[1].OrderNumber === orderNumber) {
        for (let j = 0; j < orderArray.length; j++) {
          const OrderToCheck = orderArray[j];
          if (OrderToCheck.id === orderId) {
            if (parseInt(OrderToCheck.ItemTotalQuantity) > 1) {
              OrderToCheck.ItemTotalQuantity =
                parseInt(OrderToCheck.ItemTotalQuantity) - 1;
              const priceAsNumber = parseFloat(OrderToCheck.ItemPrice) || 0;
              const foodItemPriceAsNumber =
                parseFloat(OrderToCheck.ItemTotalPrice) || 0;
              OrderToCheck.ItemTotalPrice = (
                foodItemPriceAsNumber - priceAsNumber
              ).toFixed(2);
            } else {
              OrderToCheck.ItemName = "";
              OrderToCheck.ItemTotalQuantity = "";
              OrderToCheck.ItemPrice = 0.0;
              OrderToCheck.ItemTotalPrice = 0.0;
              OrderToCheck.ItemCustomizations = "";
            }
            break;
          }
        }
        break;
      }
    }

    updateOrderData(orderArrays);
  }

  function increment(orderId, orderNumber) {
    const orderArrays = [Order1, Order2, Order3, Order4, Order5];
    for (let i = 0; i < orderArrays.length; i++) {
      const orderArray = orderArrays[i];
      if (orderArray[1].OrderNumber === orderNumber) {
        for (let j = 0; j < orderArray.length; j++) {
          const OrderToCheck = orderArray[j];
          if (OrderToCheck.id === orderId) {
            OrderToCheck.ItemTotalQuantity =
              parseInt(OrderToCheck.ItemTotalQuantity) + 1;
            const priceAsNumber = parseFloat(OrderToCheck.ItemPrice) || 0;
            const foodItemPriceAsNumber =
              parseFloat(OrderToCheck.ItemTotalPrice) || 0;
            OrderToCheck.ItemTotalPrice = (
              priceAsNumber + foodItemPriceAsNumber
            ).toFixed(2);
            break;
          }
        }
        break;
      }
    }
    updateOrderData(orderArrays);
  }

  const closePopup = () => {
    setShowPopup(false);
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
        <div className="contentOrderPage">
          <div className="OrderStatusSide">
            <div className="Order">
              {orders.map((orderArray) => (
                <div key={orderArray[0].id}>
                  <div className="Order">
                    <p className="OrderHeader">
                      <b>Order {orderArray[0].OrderNumber} status:</b>{" "}
                      {orderArray[0].OrderStatus}
                    </p>
                    <div className="OrderSymbols">
                      <div
                        className="iconWithDescription"
                        style={{
                          color: orderArray[0].OrderStatusTotal.includes(
                            "Order has been placed"
                          )
                            ? "#7acda6"
                            : "red",
                        }}
                      >
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <div className="description">Order placed</div>
                      </div>
                      <div
                        className="iconWithDescription"
                        style={{
                          color: orderArray[0].OrderStatusTotal.includes(
                            "Order has been confirmed"
                          )
                            ? "#7acda6"
                            : "red",
                        }}
                      >
                        <FontAwesomeIcon icon={faClipboardCheck} />
                        <div className="description">Order confirmed</div>
                      </div>
                      <div
                        className="iconWithDescription"
                        style={{
                          color: orderArray[0].OrderStatusTotal.includes(
                            "Order is being prepared"
                          )
                            ? "#7acda6"
                            : "red",
                        }}
                      >
                        <FontAwesomeIcon icon={faBowlRice} />
                        <div className="description">Preparing</div>
                      </div>
                      <div
                        className="iconWithDescription"
                        style={{
                          color: orderArray[0].OrderStatusTotal.includes(
                            "Order has been served"
                          )
                            ? "#7acda6"
                            : "red",
                        }}
                      >
                        <FontAwesomeIcon icon={faUtensils} />
                        <div className="description">Serving</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="OrderSummarySide">
            {orders.map((orderArray, index) => (
              <div key={orderArray[0].id}>
                <p className="OrderNumber">Order {orderArray[0].OrderNumber}</p>
                {orderArray.map((order) => (
                  <div className="FoodItemSummary" key={order.id}>
                    {order.ItemName && ( // Check if ItemName is not empty
                      <div className="ItemNameSummary-header">
                        <span className="header-of-item">{order.ItemName}</span>
                        <div className="quantity-controls-order-page">
                          {orderArray[0].OrderStatus ===
                            "Order has not been placed yet" && (
                            <React.Fragment>
                              {order.ItemTotalQuantity > 1 ? (
                                <button
                                  className="button-quantity-change"
                                  onClick={() =>
                                    decrement(order.id, order.OrderNumber)
                                  }
                                ></button>
                              ) : (
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="icon-quantity-change"
                                  onClick={() =>
                                    decrement(order.id, order.OrderNumber)
                                  }
                                />
                              )}

                              <span className="total-quantity">
                                {order.ItemTotalQuantity}
                              </span>
                              <button
                                className="button-quantity-change"
                                onClick={() =>
                                  increment(order.id, order.OrderNumber)
                                }
                              >
                                +
                              </button>
                            </React.Fragment>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="Customizations-edit-button">
                      {order.ItemName && ( // Check if ItemName is not empty
                        <React.Fragment>
                          <div>
                            <div className="Customizations-header">
                              Customizations:
                            </div>
                            <div className="Customizations-items">
                              {order.ItemCustomizations}
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                      {orderArray[0].OrderStatus ===
                        "Order has not been placed yet" &&
                        order.ItemName && (
                          <button
                            className="EditOrder"
                            onClick={() => ConfirmOrder(orderArray)}
                          >
                            Edit
                          </button>
                        )}
                    </div>
                    {order.ItemComments && (
                      <React.Fragment>
                        <div className="Comments-header">Comments:</div>
                        <div className="Comments-items">
                          {order.ItemComments}
                        </div>
                      </React.Fragment>
                    )}
                    {order.ItemName && (
                      <React.Fragment>
                        <span className="price-of-item">
                          Price: ${order.ItemTotalPrice} (${order.ItemPrice} x{" "}
                          {order.ItemTotalQuantity})
                        </span>
                      </React.Fragment>
                    )}
                  </div>
                ))}
                <div className="OrderAndPrice">
                  {orderArray[0].OrderStatus ===
                    "Order has not been placed yet" && (
                    <button
                      className="ConfirmOrderButton"
                      onClick={() => ConfirmOrder(orderArray)}
                    >
                      Confirm Order
                    </button>
                  )}
                  <div className="OrderTotalPrice">
                    Total: {eval(`order${index + 1}Total`)}
                  </div>{" "}
                  {/* Accessing order total dynamically */}
                </div>
              </div>
            ))}
            <div className="OrderTotalPrice">
              Overall total: {TotalOrderPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
