import React, {useState, useEffect} from "react"; 
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home'
import MenuPage from './Pages/Menu'
import OrderPage from './Pages/Order'
import ItemDetailPage from './Pages/ItemDetail'
import PaymentPage from './Pages/Payment'

function App() {
  return (
  <Router> 
    
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/Menu' element={< MenuPage />} />
      <Route path='/ItemDetail/:id' element={< ItemDetailPage />} />
      <Route path='/Order' element={< OrderPage />} />
      <Route path='/Payment' element={< PaymentPage />} />
    </Routes>

  </Router>
  );
}

export default App;
