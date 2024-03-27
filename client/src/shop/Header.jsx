import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [shopDetails, setShopDetails] = useState([]);
  const navigate = useNavigate();
  const Shopid = sessionStorage.getItem("sid");

  useEffect(() => {
    getShopDetails();
  }, []);

  const getShopDetails = () => {
   axios.get('http://localhost:4777/ShopDetailed/'+Shopid)
   .then((response)=>response.data)
   .then((data)=>{
   setShopDetails(data.shop)
   })
  };

  const shopLogoutBtn = () => {
    sessionStorage.clear();
    navigate("/"); // Use navigate function to navigate
  };

  const check=()=>{
    const shopid=sessionStorage.getItem('uid')
    return!!shopid
  }

  return (
    <div className="shop-container">
      <p style={{ fontSize: "35px", color: "#0c95e4", paddingInline: "108px" }}>
        Shopzilla{" "}
        <p
          style={{
            fontSize: "18px",
            paddingInline: "64px",
            color: "red",
            marginTop: "-10px",
          }}
        >
          Shop hub
        </p>
      </p>
      <ul>
        <li>
          <Link to="/Shop/Product" className="ulstyle">
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/Shop/Products" className="ulstyle">
            Products
          </Link>
        </li>
        <li>
          <Link to="/Shop/Orders" className="ulstyle">
            Order
          </Link>
        </li>
        <li>
          <button onClick={shopLogoutBtn} className="shoplogoutBtn">
            Logout
          </button>
        </li>
        {shopDetails.map((row, key) => (
          <li style={{ color: "#0c95e4", fontSize: "Larger", marginLeft:"18px"}} key={key}>
            {row.shop_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
