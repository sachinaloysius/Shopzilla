import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import Review from "./Review";
import "./Review.css";
import OrderItems from "./OrderItems";
export default function OrderDetails() {
  const { bid } = useParams();
  const navigate = useNavigate();
  const [displayout, setDisplayout] = useState([]);
  const [reviewmodal, setReviewmodal] = useState(false);

  function openreview() {
    setReviewmodal(true);
  }

  const ReviewStyle = {
    content: {
      width: "fit-content",
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0",
      transform: "translate(-50%, -57%)",
    },
  };

  function closereview() {
    setReviewmodal(false);
  }

  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = () => {
    axios
      .get("http://localhost:4777/OrderDetails/" + bid)
      .then((response) => response.data)
      .then((data) => {
        setDisplayout(data.OrderProductDetails);
      });
  };

  const buttonClickCancelOrder = (pid) => {
    var dat = {
      bid: bid,
      pid: pid,
    };
    axios.post("http://localhost:4777/CancelOrder", dat).then((response) => {
      if (response.data.message === "True") {
        alert("Order Cancelled");
        if (response.data.check === "pass") {
          navigate("/User/Order");
        } else {
          getProductDetails();
        }
      } else {
        alert("Failed");
      }
    });
  };
  return (
    <div className="OrderDetails_Conatiner">
      <div className="OrderDetail_LeftSideContainer">
        <div className="Main_Heading">Filter</div>
        <div className="Order_Heading">ORDER STATUS</div>
           <div className="checkbox_Holder"><input type="checkbox" />On the way</div>
        <div className="checkbox_Holder"><input type="checkbox" />Delivered</div>
        <div className="checkbox_Holder"><input type="checkbox" />Cancelled</div>
        <div className="checkbox_Holder"><input type="checkbox" />Returned</div>
        <div className="order_TimeHeading">ORDER TIME</div>
        <div className="checkbox_Holder"><input type="checkbox" />Last 30 Days</div>
        <div className="checkbox_Holder"><input type="checkbox" />2022</div>
        <div className="checkbox_Holder"><input type="checkbox" />2021</div>
        <div className="checkbox_Holder"><input type="checkbox" />Older</div>
      </div>
      
      <div className="OrderDetail_RightSideContainer">
        <div>
          <input type="text" />
          <button>Search Orders</button>
        </div>

        <div>
          {displayout.map((row, key) => (
            <OrderItems row={row} getProductDetails={getProductDetails}/>
          ))}
        </div>
      </div>
    </div>
  );
}
