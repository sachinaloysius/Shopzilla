import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Subheader from "./Subheader";
import Footer from "./Footer";
import "./App.css";
import Products from "./Products";
import Phone from "./Phone";
import Cart from "./Cart";
import Order from "./Orders"
import OrderDetails from "./OrderDetails";
import Review from './Review'
import Chatbot from './Chatbot'
export default function app() {
  return (
    <div className="guestConatiner">
      <div className="Header">
        <Header/>
      </div>
      <div className="SubHeader">
        <Subheader />
      </div>
      <div className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Products/:pid" element={<Products/>}/>
          <Route path="/Phone/:id" element={<Phone/>}/>
          <Route path="/Order/" element={<Order/>}/>
          <Route path="/OrderDetails/:bid" element={<OrderDetails/>}/>
          <Route path="/Review" element={<Review/>}/>
          <Route path="/Chatbot" element={<Chatbot/>}/>
        
         

        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
