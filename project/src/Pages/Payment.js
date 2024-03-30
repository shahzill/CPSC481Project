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
import "../Style/Navbar.css";
import "../Style/Payment.css";
import "../Style/Navbar.css";
import "../Style/Order.css";
import { Order1, Order2, Order3, Order4, Order5 } from "../Data/Orders";

function PaymentPage() {
  const [orders, setOrders] = useState([]);
  const [order1Total, setOrder1Total] = useState();
  const [order2Total, setOrder2Total] = useState();
  const [order3Total, setOrder3Total] = useState();
  const [order4Total, setOrder4Total] = useState();
  const [order5Total, setOrder5Total] = useState(0);
  const [fifteenPercentTip, setFifteenPercentTip] = useState(0);
  const [twentyPercentTip, setTwentyPercentTip] = useState(0);
  const [twentyFivePercentTip, setTwentyFivePercentTip] = useState(0);
  const [TotalOrderPrice, setTotalOrderPrice] = useState();
  const [tip, setTip] = useState(0);
  const [TipTotal, setTipTotal] = useState(0);

  useEffect(() => {
    const orderArrays = [Order1, Order2, Order3, Order4, Order5];
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

      if (
        orderNotPlaced.OrderStatus === "Order has not been placed yet" &&
        foundOrder == false
      ) {
        foundOrder = true;
        newOrders.pop(orderArray);

        break;
      }
      const validItems = orderArray.filter((order) => order.ItemName !== "");

      // Calculate total price for valid items
      validItems.forEach((order) => {
        totalOrderPrice += parseFloat(order.ItemPrice);
        TotalPriceCalc += parseFloat(order.ItemPrice);
      });

      // Set total order price using the appropriate state setter from orderTotalSetters array
      orderTotalSetters[i](totalOrderPrice.toFixed(2));
    }
    setOrders(newOrders);
    setTotalOrderPrice(TotalPriceCalc.toFixed(2));
    setTipTotal(TotalPriceCalc.toFixed(2));
    setFifteenPercentTip((TotalPriceCalc * 0.15).toFixed(2));
    setTwentyPercentTip((TotalPriceCalc * 0.2).toFixed(2));
    setTwentyFivePercentTip((TotalPriceCalc * 0.25).toFixed(2));
  }, []); // Empty dependency array ensures it runs only once

  const handleTipAdd = (event) => {
    const tipValue = parseFloat(event.target.value);

    if (isNaN(tipValue)) {
      // Check if tipValue is NaN
      const totalWithTip = 0.0 + parseFloat(TotalOrderPrice); // Assuming tipValue is 0.00
      setTip(); // Set tipValue to 0.00
      setTipTotal(totalWithTip.toFixed(2));
    } else {
      const totalWithTip = tipValue + parseFloat(TotalOrderPrice);
      setTip(tipValue);
      setTipTotal(totalWithTip.toFixed(2));
    }
  };

  const handleTipAddFifteen = (event) => {
    const tipTotal =
      parseFloat(TotalOrderPrice) + parseFloat(fifteenPercentTip);
    setTipTotal(tipTotal.toFixed(2));
    setTip(fifteenPercentTip);
  };
  const handleTipAddTwenty = (event) => {
    const tipTotal = parseFloat(TotalOrderPrice) + parseFloat(twentyPercentTip);
    setTipTotal(tipTotal.toFixed(2));
    setTip(twentyPercentTip);
  };
  const handleTipAddTwentyFive = (event) => {
    const tipTotal =
      parseFloat(TotalOrderPrice) + parseFloat(twentyFivePercentTip);
    setTipTotal(tipTotal.toFixed(2));
    setTip(twentyFivePercentTip);
  };

  return (
    <>
      <div className="black-background">
        <div className="navbar">
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        </div>
        {orders.length > 0 && (
          <div className="contentPaymentPage">
            <div className="OrderSummarySide">
              {orders.map((orderArray, index) => (
                <div key={orderArray[0].id}>
                  <p className="OrderNumber">
                    Order {orderArray[0].OrderNumber}
                  </p>
                  {orderArray.map((order) => (
                    <div className="FoodItemSummary" key={order.id}>
                      {order.ItemName && ( // Check if ItemName is not empty
                        <div className="ItemNameSummary-header">
                          <span className="header-of-item">
                            {order.ItemName}
                          </span>
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
            <div className="PaymentSide">
              <div className="Tip">
                <div className="Tip-header">Add a tip</div>
                <div className="Tip-field">
                  ${TotalOrderPrice} + ${" "}
                  <input
                    type="number"
                    id="textBox"
                    value={tip}
                    onChange={handleTipAdd}
                  />{" "}
                  = ${TipTotal}
                </div>
                <div className="tip-option-buttons">
                  <button
                    className="Tip-PercentageButton"
                    onClick={handleTipAddFifteen}
                  >
                    15%( ${fifteenPercentTip} )
                  </button>
                  <button
                    className="Tip-PercentageButton"
                    onClick={handleTipAddTwenty}
                  >
                    {" "}
                    20%( ${twentyPercentTip} )
                  </button>
                  <button
                    className="Tip-PercentageButton"
                    onClick={handleTipAddTwentyFive}
                  >
                    {" "}
                    25%( ${twentyFivePercentTip} )
                  </button>
                </div>
              </div>
              <div className="Payment-options">
                <div className="Payment-header">Payment options</div>
                <div className="Payment-option-buttons">
                  <button className="Tip-PercentageButton">Credit card</button>
                  <button className="Tip-PercentageButton">Debit card</button>
                  <button className="Tip-PercentageButton">Cash</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="centered-content">
          {orders.length === 0 && (
            <div className="NoPayment">
              <span>
                Uh-oh! No payment pending. Remember to place an order first!
              </span>
              <br />
              <span className="smallText">
                Need a hand? Hit "Call for Assistance"!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
