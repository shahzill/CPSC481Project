import React from "react";
import HomePage from "../Pages/Home";
import Navbar from "../Components/Navbar";
import MenuPage from "../Pages/Menu";
import OrderPage from "../Pages/Order";
import ItemDetailPage from "../Pages/ItemDetail";
import PaymentPage from "../Pages/Payment";
import EditOrderPage from "../Pages/EditOrder";
import AboutUsPage from "../Pages/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <div className="navbar">
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      </div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/ItemDetail/:id" element={<ItemDetailPage />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/EditOrder/:OrderId/:ItemId" element={<EditOrderPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
