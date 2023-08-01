import React from "react";
import Searchlogo from "./assets/search.gif";
import { Link } from "react-router-dom";
import "./App.css";



export default function Header() {

 
  return (
    <div>
      <div className="headbox">
        <span>
          <Link to="/" className="brandnamestyle">
            Shopzilla{" "}
          </Link>
        </span>
        <input type="text" placeholder="Search for products.."  className="search_container"/>
        <img
          src={Searchlogo}
          style={{
            width: "25px",
            height: "25px",
            "margin-bottom": "-8px",
            marginLeft: "-31px",
          }}
          alt=""
        />
       
        <Link style={{ fontSize: "20px", color: "white" ,textDecoration:"none",position: "inherit",right: "130px" }} to="/User/Order">My Order</Link>
         <Link to="/User/Cart" style={{ fontSize: "20px", color: "white" ,textDecoration:"none",position: "inherit",right: "50px" }}><span>
           <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
          style={{
            width: "25px",
            height: "25px",
            "margin-bottom": "-8px",
            marginLeft: "19px",
            filter: "invert(1)"
          }}
          alt=""
        />
      Cart
        </span>
        </Link> 
        
      </div>
      
    </div>
  );
}
