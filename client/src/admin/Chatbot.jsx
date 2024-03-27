import React, { useEffect, useRef, useState } from "react";
import "./Chatbotadmin.css";
import axios from "axios";
import uploadpic from "./assets/uploadpic.png";
import { checkBot } from "./ChatbotpredefinedDat";

export default function Chatbot({ userId }) {
  const adminid = sessionStorage.getItem("aid");
  const userid = userId;
  const [data, setData] = useState("");
  const [displaymessage, setDisplaymessage] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [check, setCheck] = useState(false);
  const messageContainerRef = useRef(null);

  const [count, setCount] = useState(0);

  const getdisplaymessage = () => {
    axios
      .get("http://localhost:4777/Chatbotmessagedisplay/" + userid)
      .then((response) => response.data)
      .then((data) => {
        if (displaymessage === "") {
          setDisplaymessage(data.chat);
          if (count === 0) {
            setCheck(!check);
          }
        } else {
          setDisplaymessage(data.chat);
          if (count === 0) {
            setCheck(!check);
          }
        }
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getdisplaymessage();
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ScrollFunc = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const Buttonclick = () => {
    var dat = {
      userid: adminid,
      data: data,
    };
    if (data === "") {
    } else {
      // axios.post("http://localhost:4777/Chatbot", dat).then((response) => {
      //   if (response.data.message === "Data Saved") {
      //     setData("");
      //     getdisplaymessage();
      //     setCheck(!check);
          var dat = {
            userid: userid,
            data: data,
          };

          axios.post("http://localhost:4777/ChatbotA", dat).then((response) => {
            if (response.data.message === "Data Saved") {
              setData("");
              getdisplaymessage();
              setCheck(!check);
            }
          });
        }
      }
  //     });
  //   }
  // };

  useEffect(() => {
    ScrollFunc();
  }, [check]);

  const handleFileInputChange = (event) => {
    const chatmediaattached = event.target.files[0];
    setSelectedFile(chatmediaattached);
    const frm = new FormData();
    frm.append("chatmedia", chatmediaattached);
    frm.append("uid", userid);
    axios
      .post("http://localhost:4777/Chatbotmessagedisplaymedia", frm)
      .then((response) => {
        if (response.data.message === "Data Saved") {
          window.location.reload();
        } else {
          alert("Failed");
        }
      });
  };

  const fileButtonClick = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <>
      <div className="message_Conatiner1" ref={messageContainerRef}>
        {displaymessage.map((row, index) => (
          <div
            key={index}
            className={
              row.chat_TOID.toString() === userid.toString()
                ? "chat-right1"
                : "chat-left1"
            }
          >
            {row.chat_Contant === null ? (
              <img src={row.chat_Media} width={"100px"} alt="" />
            ) : (
              row.chat_Contant
            )}
          </div>
        ))}
      </div>
      <div className="chatbot_BottomContainer1">
        <input
          type="text"
          className="chatbox_Inputtext1"
          placeholder="Type your message here"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <img
          src={uploadpic}
          width="28px"
          alt=""
          style={{ marginBottom: "-9px" }}
          onClick={fileButtonClick}
        />
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
        <button onClick={Buttonclick}>Send</button>
      </div>
    </>
  );
}
