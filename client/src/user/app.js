import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Subheader from "./Subheader";
import Footer from "./Footer";
import "./App.css";
import Mobile from "./Mobile"
import Phone from "./Phone";
export default function app() {
  return (
    <div className="guestConatiner">
      <div className="Header">
        <Header />
      </div>
      <div className="SubHeader">
        <Subheader />
      </div>
      <div className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mobile" element={<Mobile/>}/>
          <Route path="/Phone/:id" element={<Phone/>}/>
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
