import React from "react";
import Searchlogo from "./assets/search.gif";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Createaccount from "./Createaccount";
import Shop from "./Shop";
import Login from "./login";
import "./App.css";

export default function Header() {
  const [usermodalopen, setUsermodalopen] = React.useState(false);
  const [shopmodalopen, setShopmodalopen] = React.useState(false);
  const [userloginmodelopen, setUserloginmodalopen] = React.useState(false);

  function openUser() {
    setUsermodalopen(true);
  }

  function openShop() {
    setShopmodalopen(true);
  }

  function Openuserlogin() {
    setUserloginmodalopen(true);
  }

  const customStyles = {
    content: {
      width: "fit-content",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  const shopeStyle = {
    content: {
      width: "fit-content",
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0",
      transform: "translate(-50%, -57%)",
    },
  };

  function closeUser() {
    setUsermodalopen(false);
  }

  function closeShop() {
    setShopmodalopen(false);
  }

  function closeUserlogin() {
    setUserloginmodalopen(false);
  }
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
       <span className="recent_Search"></span>
        <button onClick={Openuserlogin}> Login </button>
        <Modal
          style={customStyles}
          isOpen={userloginmodelopen}
          onRequestClose={closeUserlogin}
          contentLabel="Example Modal"
        >
          <button className="closebuttonLogin" onClick={closeUserlogin}>
            X
          </button>
          <Login />
        </Modal>

        <span className="signupStyle">
          <Link onClick={openUser}>Create Account</Link>
        </span>
        <span className="Becomeasellerstyle">
          <Link onClick={openShop}>Become a Seller</Link>
        </span>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "-8px",
            marginLeft: "19px",
            filter: "invert(1)"
          }}
          alt=""
        />
        <span style={{ fontSize: "20px", color: "white" }}>Cart</span>
      </div>
      <Modal
        style={customStyles}
        isOpen={usermodalopen}
        onRequestClose={closeUser}
        contentLabel="Example Modal"
      >
        <button className="closeButton" onClick={closeUser}>
          X
        </button>
        <Createaccount />
      </Modal>

      <Modal
        style={shopeStyle}
        isOpen={shopmodalopen}
        onRequestClose={closeShop}
        contentLabel="Example Modal"
      >
        <button className="closebuttonforShop" onClick={closeShop}>
          X
        </button>
        <Shop />
      </Modal>
    </div>
  );
}
