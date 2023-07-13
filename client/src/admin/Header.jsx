import React from "react";
import "./Header.css";
import Adminlogo from "./assets/adminlogo.gif";
import Settingslogo from "./assets/settings.gif";
import Profilepic from "./assets/propic.png";
export default function Header() {
  return (
    <div className="header-container">
      <span className="textalign">admin</span>
      <img src={Adminlogo} alt="adminlogo" className="adminlogo" />
      <span className="right-side">
        <img src={Settingslogo} alt="settingslogo" className="settingslogo" />
        <img src={Profilepic} alt="profilepicture" style={{ width: "55px" }} />
      </span>
    </div>
  );
}
