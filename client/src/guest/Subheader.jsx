import React from 'react';
import laptopLogo from "./assets/laptop.jpg";
import electronicLogo from "./assets/electronics.jpg";
import fashionLogo from "./assets/fashion.jpg";
import groceryLogo from "./assets/grocery.jpg";
import mobileLogo from "./assets/mobile.jpg";
import travelLogo from "./assets/travel.jpg";
import offerLogo from "./assets/offer.jpg";
import {Link} from "react-router-dom"
import "./App.css";

export default function Subheader() {
  return (
    <div className="subHeadingcontainer" >
      <div className="subheadBox" >
        <div style={{ marginInline: "128px", display: "flex", justifyContent: "space-between" }}>
           <div><img src={groceryLogo}  alt="Grocery"  /></div>
          <div><img src={fashionLogo}  alt="Fashion" /></div>
          <div><img src={mobileLogo}  alt="Mobile" /></div>
          <div><img src={electronicLogo}  alt="Electronics" /></div>
          <div><img src={laptopLogo}  alt="Laptop"/></div>
          <div><img src={electronicLogo}  alt="Appliances"/></div>
          <div><img src={travelLogo}  alt="Travel" /></div>
          <div><img src={offerLogo}  alt="Top Offer"/></div>
        </div>
         
          <div style={{ marginInline: "140px", display: "flex", justifyContent: "space-between",padding:"4px" }}>
            <div style={{fontSize:"large"}}>Grocery</div>
          <div style={{fontSize:"large",marginRight:"20px"}}>Fashion</div>
          <div  style={{fontSize:"large"}}>Mobile</div>
          <div  style={{fontSize:"large"}}>Electronics</div>
          <div style={{fontSize:"large"}} >Laptops</div>
          <div style={{fontSize:"large"}} >Appliances</div>
          <div style={{fontSize:"large"}} >Travel</div>
          <div style={{fontSize:"large"}}>Top Offer</div>
          </div>
          
      </div>
    </div>
  );
}
