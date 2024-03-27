import React from "react";
import "./Header.css";
import Adminlogo from "./assets/adminlogo.gif";
import Settingslogo from "./assets/settings.gif";
import Profilepic from "./assets/propic.png";
import chatbotlogo from './assets/chatbot.png'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className="header-container">
      <span className="textalign">admin</span>
      <img src={Adminlogo} alt="adminlogo" className="adminlogo" />
      <span className="right-side">
     <Link to='/admin/MessageList'> <img src={chatbotlogo} alt="" width='26px'style={{position:"relative",bottom:"15px",right:"10px"}} /></Link>
        <img src={Settingslogo} alt="settingslogo" className="settingslogo" />
        <img src={Profilepic} alt="profilepicture" style={{ width: "55px" }} />
      </span>
    </div>
  );
}
