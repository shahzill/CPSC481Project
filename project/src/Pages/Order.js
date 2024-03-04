import React, {useState, useEffect} from "react"; 
import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import "../Style/Navbar.css"
import "../Style/Order.css"
import { Order1, Order2, Order3, Order4, Order5 } from "../Data/Orders";  

function OrderPage() {

    const [orders, setOrders] = useState([]);
    const [order1Total, setOrder1Total] = useState();
    const [order2Total, setOrder2Total] = useState();
    const [order3Total, setOrder3Total] = useState();
    const [order4Total, setOrder4Total] = useState();
    const [order5Total, setOrder5Total] = useState();


    
     useEffect(() => {
        const orderArrays = [Order1, Order2, Order3, Order4, Order5];
        let foundOrder = false;
        const newOrders = [];
        const orderTotalSetters = [
            setOrder1Total,
            setOrder2Total,
            setOrder3Total,
            setOrder4Total,
            setOrder5Total
        ];

        for (let i = 0; i < orderArrays.length; i++) {
            let totalOrderPrice = 0;
            const orderArray = orderArrays[i];
            const orderNotPlaced = orderArray.find(order => order.id === 1);
            newOrders.push(orderArray);

            const validItems = orderArray.filter(order => order.ItemName !== "");
                    
                    // Calculate total price for valid items
                    validItems.forEach(order => {
                        totalOrderPrice += parseFloat(order.ItemPrice);
                    });
            
                    // Set total order price using the appropriate state setter from orderTotalSetters array
                    orderTotalSetters[i](totalOrderPrice.toFixed(2));
                    console.log("total order price for ",i,totalOrderPrice)

            if (orderNotPlaced.OrderStatus === "Order has not been placed yet" && foundOrder == false) {
                foundOrder = true;
                
                if(orderNotPlaced.ItemName === ""){
                    newOrders.pop(orderArray)
                }
                break;
            }
        }
        setOrders(newOrders)
    }, []);  // Empty dependency array ensures it runs only once 


    return (
        <>
        <div className="black-background">
            <div className="navbar">
                <React.Fragment><Navbar /></React.Fragment>
            </div>
            <div className="contentOrderPage">
                <div className="OrderStatusSide">
                    <div className="Order">
                        {orders.map(orderArray => (
                            <div key={orderArray[0].id}>
                                <div className="Order">
                                    <p className="OrderHeader" >
                                        <b>Order {orderArray[0].OrderNumber} status:</b> {orderArray[0].OrderStatus}
                                    </p> 
                                    <div className="OrderSymbols" >
                                        <div className="iconWithDescription" style={{ color: orderArray[0].OrderStatusTotal.includes("Order has been placed") ? '#7acda6' : 'red' }}>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                            <div className="description">Order placed</div>
                                        </div>
                                        <div className="iconWithDescription" style={{ color: orderArray[0].OrderStatusTotal.includes("Order has been confirmed")  ? '#7acda6' : 'red' }}>
                                            <FontAwesomeIcon icon={faClipboardCheck} />
                                            <div className="description">Order confirmed</div>
                                        </div>
                                        <div className="iconWithDescription" style={{ color: orderArray[0].OrderStatusTotal.includes("Order is being prepared")  ? '#7acda6' : 'red' }}>
                                            <FontAwesomeIcon icon={faBowlRice} />
                                            <div className="description">Preparing</div>
                                        </div>
                                        <div className="iconWithDescription" style={{ color: orderArray[0].OrderStatusTotal.includes("Order has been served")  ? '#7acda6' : 'red' }}>
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
                        <ul>
                            {orderArray.map(order => (
                                <div className="FoodItemSummary" key={order.id}>
                                    {order.ItemName && ( // Check if ItemName is not empty
                                        <div className="ItemNameSummary-header">
                                            <span className="header-of-item">{order.ItemName}</span>
                                            <span className="quantity-of-item">Quantity: {order.ItemTotalQuantity}</span>
                                        </div>
                                    )}
                                    {order.ItemName && ( // Check if ItemName is not empty
                                        <React.Fragment>
                                            <div className="Customizations-header">Customizations:</div> 
                                            <div className="Customizations-items">{order.ItemCustomizations}</div>
                                        </React.Fragment>
                                    )}
                                    {order.ItemComments && (
                                        <React.Fragment>
                                            <div className="Comments-header">Comments:</div> 
                                            <div className="Comments-items">{order.ItemComments}</div>
                                        </React.Fragment>
                                    )}
                                </div>                                 
                            ))}
                        </ul>
                        <p className="OrderNumber">Total: {eval(`order${index + 1}Total`)}</p> {/* Accessing order total dynamically */}
                    </div>
                ))}
                </div> 
            </div>
        </div>
        </>
    )

}

export default OrderPage;


{/* <ul>
                {orders.map(orderArray => (
                    <div key={orderArray[0].id}>
                        <h3>Order {orderArray[0].OrderNumber} status: {orderArray[0].OrderStatus}</h3>
                        <h4>Entity Name: {orderArray[0].EntityName}</h4> 
                        <ul>
                            {orderArray.map(order => (
                                <li key={order.id}>
                                    <strong>Item Name:</strong> {order.ItemName}<br />
                                   
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul> */}

            {/*  <div className="OrderSymbols" style={{ color: '#7acda6' }}>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <div className="description">Order placed</div>
                        </div>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faClipboardCheck} />
                            <div className="description">Order confirmed</div>
                        </div>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faBowlRice} />
                            <div className="description">Preparing</div>
                        </div>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faUtensils} />
                            <div className="description">Serving</div>
                        </div>
                        </div> */}
                        
                    



                    {/* <div className="Order">
                        <p className="OrderHeader" >
                            <b>Order  status:</b> Order has not been placed yet
                        </p>
                        <div className="OrderSymbols" style={{ color: '#d9534f' }}>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <div className="description">Order placed</div>
                        </div>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faClipboardCheck} />
                            <div className="description">Order confirmed</div>
                        </div>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faBowlRice} />
                            <div className="description">Preparing</div>
                        </div>
                        <div className="iconWithDescription">
                            <FontAwesomeIcon icon={faUtensils} />
                            <div className="description">Serving</div>
                        </div>
                        </div>
                    </div> */}