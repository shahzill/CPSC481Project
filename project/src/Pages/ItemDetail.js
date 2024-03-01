import React, {useState, useEffect} from "react"; 
import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import "../Style/Navbar.css"
import "../Style/ItemDetail.css"
import { foodItems } from "../Data/FoodItems"; 
import steakFries from "../Images/SteakFries.jpg"


function ItemDetailPage() {

    let { id } = useParams(); // Access the ID parameter from the URL 
    const specificFoodItem = foodItems.find(foodItem => foodItem.id === parseInt(id)) || null; 
    // Successfully added button logic:

    const [isAdded, setIsAdded] = useState(false);

    const handleAddToOrder = () => {
      // Perform any necessary actions when the button is clicked
      // For now, we'll just update the state to show the "successfully added" message
      setIsAdded(true);
  
      // Reset the message after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setIsAdded(false);
      }, 3000);
    };

    // increasing and decreasing quantity

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const decrement = () => {
      if (quantity > 0) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
      if(price > 0){
         setPrice(prevPrice => prevPrice - specificFoodItem.p);
      }
     
    };
  
    const increment = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
       
    setPrice(prevPrice => prevPrice + specificFoodItem.p);
      
      
    };

    return (
        <>
        <div className="black-background">
        <div className="navbar">
            <React.Fragment><Navbar /></React.Fragment>
        </div>
        {/** Item details columns */}
        <div class="container">
            <div class="column">
               {/** Column 1*/}

               
            <div className="content">
                    {specificFoodItem && (
                        <>
                        <div className="itemName"> <h1>{specificFoodItem.Name}</h1> </div>
                            
                            {/* Display other details of the specific food item */}
                        </>
                    )}
                    {!specificFoodItem && (
                        <h1>Food item not found</h1>
                    )}

                    {/* Placeholder for specific image*/}

                    <img src={steakFries} alt={specificFoodItem.Name} />

                    {/* Description */}

                    <div class="inner2"> Description: </div>
                    {specificFoodItem && (
                        <>
                            <h1>{specificFoodItem.Description}</h1>
                            {/* Display other details of the specific food item */}
                        </>
                    )}
                    {!specificFoodItem && (
                        <h1>Food item not found</h1>
                    )}

                     {/* Ingredients */}

                     <div class="inner2"> Ingredients: </div>
                    {specificFoodItem && (
                        <>
                            <h1>{specificFoodItem.Ingridients}</h1>
                            {/* Display other details of the specific food item */}
                        </>
                    )}
                    {!specificFoodItem && (
                        <h1>Food item not found</h1>
                    )}

                </div>
            </div>
            <div class="column">
                {/** Column 2*/}
                <div className="itemName"> <h1>Customize your order!</h1> </div>


        
        <div class="container2">

        <div class="options">
        <div class="inner3"> Add sides: </div>

            
                    <div class="addon">
            <input type="checkbox" id="left-side" name="left-side" className="bigger-checkbox"></input>
            <h1 className="content">Fries</h1>
            </div>
                        
            <div class="addon">
            <input type="checkbox" id="left-side" name="left-side" className="bigger-checkbox"></input>
            <h1 className="content">Mashed Potatoes</h1>

             </div>

                        <div class="comment-box">
            <div class="inner4">Special instructions:</div>
            <textarea id="comments" name="comments" placeholder="Add special instructions..."></textarea>
            </div>

        </div>
       

        <div class="addon">
        <div class="quantity">
        <div class="inner6"> Quantity</div>
        <div className="quantity-controls">
            <button className="buttonq" onClick={decrement}>-</button>
            <span id="total" className="totalq">{quantity}</span>
            <button className="buttonq" onClick={increment}>+</button>
         </div>
     </div>
            
     <div class="quantity">
        <div className="quantity-controls">
        <h1 class="pricey">{price}$</h1>    
          </div>
     </div>
    </div>
                        {/* Add to Order and Go to Order*/}
                <div>
            <button className="add-to-order" onClick={handleAddToOrder}>Add to Order</button>
            {isAdded && <span class="temp">Successfully added &#x2713;</span>}
            </div>

            <div>
            <Link to="/Order"><button className="go-to-order" >Go to Order</button></Link>
            </div>
</div>
            </div>
        </div>
       
        </div>
        </>
    )

}


export default ItemDetailPage;