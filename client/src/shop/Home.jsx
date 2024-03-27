import React from "react";
import "./App.css";
import Poster from "./assets/poster.png"
export default function Home() {
  return (
    <div className="Shophome-container">
      <img src={Poster} style={{zIndex:"0",position:"absolute",width:"350px",top:"34px",left:"-177px"}} alt="" />
      <div style={{ fontSize: "x-large", color: "white" }}>
        Launch your business in <br /> 10 minutes
      </div>
      <button>Start Selling</button>
      
    </div>
  );
}
