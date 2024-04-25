import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Subheader from "./Subheader";
import Footer from "./Footer";
import "./App.css";
import Products from "./Products";
import Phone from "./Phone";
import Cart from "./Cart";
import Order from "./Orders";
import OrderDetails from "./OrderDetails";
import Review from "./Review";
import Chatbot from "./Chatbot";
import Userprofile from "./Userprofile";
import Modal from "react-modal";
import chatbotlogo from "./assets/chatbot.png";
import axios from "axios";
export default function App() {
  const [chatbotmodalopen, setChatbotmodelopen] = useState(false);
  const [cartdisplaycount, setCartdisplaycount] = useState(null);
  const UserID = sessionStorage.getItem("uid");


  const Fetchcartcountnumber = () => {
    axios
      .get("http://localhost:4777/Fetchcartcountnumber/" + UserID)
      .then((response) => response.data)
      .then((data) => {
        setCartdisplaycount(data.result[0].cart_count);
      });
  };

  useEffect(() => {
    Fetchcartcountnumber();
  },[])


  function openchatbot() {
    setChatbotmodelopen(true);
  }
  const customStyles = {
    content: {
      width: "fit-content",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  function closechatbot() {
    setChatbotmodelopen(false);
  }
  return (
    <div className="guestConatiner">
      <div className="Header">
        <Header cartdisplaycount={cartdisplaycount} />
      </div>
      <div className="SubHeader">
        <Subheader />
      </div>
      <div className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart  Fetchcartcountnumber={Fetchcartcountnumber}/>} />
          <Route path="/Products/:pid" element={<Products />} />
          <Route path="/Phone/:id" element={<Phone  Fetchcartcountnumber={Fetchcartcountnumber}/>} />
          <Route path="/Order/" element={<Order />} />
          <Route path="/OrderDetails/:bid" element={<OrderDetails />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/Profile" element={<Userprofile />} />
        </Routes>
        <div onClick={openchatbot}
          style={{
            position: "fixed",
            bottom: "0",
            right: "2px",
            transform: " translate(-50%, -50%)",
            border: '1px solid #a9a2a2',
            borderRadius:'10px'
          }}
        >
          <img src={chatbotlogo} width='35px' alt="chatbotlogo"/>
        </div>
        <Modal
          style={customStyles}
          isOpen={chatbotmodalopen}
          onRequestClose={closechatbot}
          contentLabel="Example Modal"
        >
          <button className="closebuttonLogin" onClick={closechatbot}>
            X
          </button>
          <Chatbot />
        </Modal>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
