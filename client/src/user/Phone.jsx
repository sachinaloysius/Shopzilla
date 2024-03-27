import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Phone({Fetchcartcountnumber}) {
  const value = useParams("id");
  const [name, setName] = useState("");
  const [details, setDetails] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const[stock,setStock]=useState([])

  useEffect(() => {
    PhoneData();
    getStock()
  }, []);
  const PhoneData = () => {
    axios
      .get(`http://localhost:4777/Product_Phone/${value.id}`)
      .then((response) => response.data)
      .then((data) => {
        setName(data.phone[0].product_name);
        setPrice(data.phone[0].product_price);
        setDetails(data.phone[0].product_details.split(","));
        setImage([data.phone[0].product_image]); // product tey image first shop sign up ayapol add cheytha image image enn paranja state il eduth vech ath pinne aa state map vilikunnathinu munp vilichu map vilikunna images varunnathu gallery il add cheytha images aanu
        getImage();
      });
  };

  const getImage = () => {
    axios
      .get(`http://localhost:4777/Gallery/${value.id}`)
      .then((response) => response.data)
      .then((data) => {
        setImages(data.gallery);
      });
  };
  const AddtoCartClick=()=>{
    var dat={
  productid:value.id,
   userid:sessionStorage.getItem("uid")
    }
   
  axios.post("http://localhost:4777/Addtocart" , dat)
  .then((response)=>response.data) .then((data) => {
    Fetchcartcountnumber()
      if (data.message==="Added to Cart") {
        toast.success('Added to Cart', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error('Already Added to Cart', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    })
  }

  const getStock=()=>{
    axios.get(`http://localhost:4777/StockDetail/${value.id}`)
    .then((response)=>response.data)
    .then((data)=>{
      setStock(data.stock)
    })
  }
  return (
    <div className="iphone13mini128gb_MainContainer">
      <div className="iphone13mini128gbHolderContainer">
        <div className="carousel-container">
          <Carousel>
            <img src={image} alt="" />
            {images.map((row, key) => (
              <img src={row.gallery_image} alt="" />
            ))}
          </Carousel>
        </div>

        <div className="Product_RightContainer">
          <div className="brand_nameProduct">{name}</div>
          <div className="product_PriceStyle">
          ₹{price}
            {/* <span
              style={{
                fontSize: "small",
                textDecoration: "line-through",
                fontWeight: "lighter",
                color: "#878787",
              }}
            >
              ₹74,900
            </span> */}
            {/* <span
              style={{
                fontSize: "small",
                fontWeight: "bold",
                color: "green",
                paddingLeft: "5px",
              }}
            >
              5% off
            </span> */}
          </div>
          {stock<1}
          {stock<1?(  <div className="addtocart_Style" onClick={AddtoCartClick} >
            {" "}
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              style={{
                width: "25px",
                height: "25px",
                marginBottom: "-8px",
                filter: "invert(1)",
                marginInline: "15px",
              }}
              alt="cartlogo"
            />
            Out of stock
          </div>):(
              <div className="addtocart_Style" onClick={AddtoCartClick} >
              {" "}
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                style={{
                  width: "25px",
                  height: "25px",
                  marginBottom: "-8px",
                  filter: "invert(1)",
                  marginInline: "15px",
                }}
                alt="cartlogo"
              />
              ADD TO CART
            </div>
          )}
        
          <div>
          
            <div> {stock<10?`Left ${stock}`:""} </div>
            <div className="avilableoffer_Style">Available offers</div>
            <span className="bankOffersContainer">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
                className="offerimage_Product"
              />
              <li
                style={{ marginTop: "-21px", width: "93%", listStyle: "none" }}
              >
                <span className="offerimg_Firstline">Bank Offer</span>
                <span className="offerimg_Secondline">
                  5% Cashback on Flipkart Axis Bank Card
                </span>
              </li>
            </span>
          </div>
          <div className="Product_Description">
            <div className="discription_Title"> Description</div>
            <div className="discription_Details">
              <ul className="productdetailsStyle">
                {details.map((detail, index) => (
                  <li key={index} style={{ margin: "10px 0px" }}>
                    {detail.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
