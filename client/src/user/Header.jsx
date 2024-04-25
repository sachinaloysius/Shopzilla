import React, { useEffect, useState } from "react";
import Searchlogo from "./assets/search.gif";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
const UserID = sessionStorage.getItem("uid");

export default function Header({cartdisplaycount}) {
  const [productDetails, setProductDetails] = useState([]);
  const [userName, setUserName] = useState([]);
  const[inputData,setInputData]=useState()
  const[searchedResults,setSearchedResults]=useState([])
  const history = useNavigate();
  const seachedProduct=useNavigate()
  useEffect(() => {
    getProductDetails();
    getUserDetails();
    
  }, []);



  const getProductDetails = () => {
    axios
      .get("http://localhost:4777/Products")
      .then((response) => response.data)
      .then((data) => {
        setProductDetails(data.products);
      });
  };

  const getUserDetails = () => {
    axios
      .get("http://localhost:4777/UserDetails/" + UserID)
      .then((response) => response.data)
      .then((data) => {
        setUserName(data.User);
      });
  };

  const LogoutBTNaction = () => {
    history("/");
    sessionStorage.clear();
  };

  const checkAuthentication = () => {
    // Check if user-related data exists in session storage or any other storage
    const userId = sessionStorage.getItem("uid");
    // Return true if the user is authenticated, false otherwise
    return !!userId;
  };

  useEffect(() => {
    // Check if the user is authenticated on the initial load
    const isAuthenticated = checkAuthentication();

    if (!isAuthenticated) {
      // Redirect to the login page if the user is not authenticated
      history("/");
    }
  }, [history]);

  const searchBTNnaction=()=>{
    axios.get('http://localhost:4777/ProductSearch'+ inputData)
    .then((response)=>response.data)
    .then((data)=>{
      const value = data.search[0].product_id
      seachedProduct("/User/Phone/"+value)
      
    })
  }

  return (
    <div>
      <div className="headbox">
        <span>
          <Link to="/" className="brandnamestyle">
            Shopzilla{" "}
          </Link>
        </span>
        <input
          type="text"
          list="idpassedtosearch"
          placeholder="Search for products.."
          className="search_container" 
          onKeyUp={(e)=>setInputData(e.target.value)}
          
        />
        <datalist id="idpassedtosearch">
          {productDetails.map((row, key) => (
            <option key={key} value={row.product_name}>{row.product_name}</option>
          ))}
        </datalist>
        <img
          src={Searchlogo}
          style={{
            width: "50px",
            height: "28px",
            marginBottom: "-3px",
            marginLeft: "-53px",
          }}
          alt=""
          onClick={searchBTNnaction}
          
        />
        <Link
          style={{
            fontSize: "20px",
            color: "white",
            textDecoration: "none",
            position: "inherit",
            right: "250px",
          }}
          to="/User/Order"
        >
          My Order
        </Link>
        <Link
          to="/User/Cart"
          style={{
            fontSize: "20px",
            color: "white",
            textDecoration: "none",
            position: "inherit",
            right: "180px",
          }}
        >
          <span>
            <span>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                style={{
                  width: "25px",
                  height: "25px",
                  marginBottom: "-8px",
                  marginLeft: "19px",
                  filter: "invert(1)",
                }}
                alt=""
              />
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: 37,
                  fontSize: "13px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  width: "17px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartdisplaycount}
              </span>
            </span>
            Cart
          </span>
        </Link>
        <div id="propicUserDropdownMainHolder">
          {userName.map((row, key) => (
            <div className="profile" key={key}>
              <img src={row.user_photo} alt="" className="userprofilestyle" />
              <p className="usernamestyle">{row.user_name}</p>
            </div>
          ))}

          <div className="dropdownn">
            <Link to='Profile' style={{textDecoration:'none'}}><div style={{ margin: "5px",color:'white' }}>Profile</div></Link>
            <div style={{ margin: "5px" }} onClick={LogoutBTNaction}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
