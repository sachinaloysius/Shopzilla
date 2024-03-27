import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import {Route, Routes} from 'react-router-dom';
import District from "./District";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Place from "./Place";
import Category from "./Category";
import Subcategory from "./Subcategory"
import Chatbot from './Chatbot'
import MessageList from './ListMessage'

export default function app() {
  
  return (
    <div className="admin-container">
      <div className="header"><Header/></div>
      <div className="sidebar"><Sidebar/></div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/District" element={<District />}/>
          <Route path="/Place" element={<Place/>}/>
          <Route path="/Category" element={<Category/>}/>
          <Route path="/Subcategory" element={<Subcategory/>}/>
          <Route path="/MessageList" element={<MessageList/>}/>
        </Routes>
      </div>
      <div className="footer"><Footer/></div>
    </div>
  );
}
