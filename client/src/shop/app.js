import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import Products from "./Products"
import Gallery from "./Gallery";
import "./App.css";

export default function app() {
  return (
    <div className="guestConatiner">
      <div className="Header">
        <Header /> 
      </div>
  
      <div className="Main">
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Gallery/:id" element={<Gallery/>} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
