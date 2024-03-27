import React, { useEffect, useState } from "react";
import image from "./assets/chatbot.png";
import axios from "axios";
import Chatbot from "./Chatbot";
import {Link} from 'react-router-dom'
export default function ListMessage() {
  const [data, setData] = useState([]);
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    getUserChatMessage();
  }, []);
  const getUserChatMessage = () => {
    axios
      .get("http://localhost:4777/AdminChatBot")
      .then((response) => response.data)
      .then((data) => {
        setData(data.adminuserchat);
      });
  };
  return (
    <div className="ListmessageMainContainer">
      <div className="MessageListContainer">
        <div className="MessageListLeft">
          <div className="MessageListLeft_bottomPart_Main">
            {data.map((row, key) => (
           
              <div className="MessageListLeft_bottomPart" key={key} onClick={()=> setUserID(row.user_id)}>
                <div className="MessageListLeft_bottomPart_ProPic">
                  <img src={row.user_photo} alt="" width="40px" />
                </div>
                <div>
                  <div style={{ fontSize: "large" }}>{row.user_name}</div>
                  <div>{row.chat_Contant}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{width:'100%'}}>
          <div className="chatboxMain_Conatiner1">
            <div className="message_Conatiner1">
              {
                userID &&  <Chatbot userId={userID} />

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
