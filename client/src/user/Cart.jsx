import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
export default function Cart({Fetchcartcountnumber}) {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("uid");
  const [cartitem, setCartitem] = useState([]);
  const [grandTotal, setGarndTotal] = useState(0);
  const [bookingid, setBookingid] = useState("");
    useEffect(() => {
    getCartItem();
  }, []);

  const getCartItem = () => {
    axios
      .get("http://localhost:4777/Cart/" + userId)
      .then((response) => response.data)
      .then((data) => {
        if (data.cart.length>0) {
          setBookingid(data.cart[0].booking_id);
        }
        setCartitem(data.cart);
        calculateGrandTotal(data.cart);
      });
  };

  const calculateGrandTotal = (cart) => {
    const total = cart.reduce((acc, item) => {
      const itemTotal = item.product_price * item.cart_quantity;
      return acc + itemTotal;
    }, 0);
    setGarndTotal(total);
  };

  const removeitemclick = (delid) => {
    axios
      .delete("http://localhost:4777/Cart/" + delid)
      .then((response) => response.data)
      .then((data) => {
        getCartItem();
        Fetchcartcountnumber()
      });
  };

  const CheckoutbtnClick = () => {
    const val = {
      bookingid: bookingid,
      grandTotal: grandTotal,
    };

    axios.post("http://localhost:4777/Cart_Checkout/", val).then((response) => {
      if (response.data.message === "True") {
        alert("Booking Sucessfull");
        Fetchcartcountnumber()
        navigate(`/Payment/${bookingid}`);
      } else {
        alert("Failed");
      }
    });
  };
  return (
    <div className="Cart-Container">
      <div>
        <div className="Table-Container">
          <div className="Cart-TextAlign">Cart</div>
          <div style={{ display: "flex", width: "90%" }}>
            <div className="cart-ColumnHeading">Product Image</div>
            <div className="cart-ColumnHeading">Name</div>
            <div className="cart-ColumnHeading">Price</div>
            <div className="cart-ColumnHeading">Qty</div>
            <div className="cart-ColumnHeading">Remove</div>
            <div className="cart-ColumnHeading">Total</div>
          </div>
          {cartitem.map((row, key) => (
            <CartItem
              key={key}
              product={row}
             
              remove={removeitemclick}
              load={getCartItem}
            />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "309px",
              fontSize: "larger",
            }}
          >
            GrandTotal ₹{grandTotal}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "309px",
              marginTop: "20px",
            }}
          >
            <button className="checkoutbtn" onClick={() => CheckoutbtnClick()}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
