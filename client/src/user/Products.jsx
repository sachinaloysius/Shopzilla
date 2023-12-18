import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './Review.css'

export default function Products() {
  const value=useParams('pid')
  const [pricerange, setPricerange] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    MobileData();
  }, [value]);

  
  const MobileData = () => {
    axios
      .get(`http://localhost:4777/Product_Mobile/${value.pid}`)
      .then((response) => response.data)
      .then((data) => {
        setProductData(data.mobile);
        console.log(data.mobile);
      });
  };
  return (
    <div className="Mobile_mainConatiner">
      <div className="left_SideConatiner">
        <div className="filter_Style">Filters</div>
        <div className="price_Style">
          PRICE
          <br />
          <input
            type="range"
            onChange={(e) => setPricerange(e.target.value)}
            id="volume"
            name="volume"
            min="10000"
            max="200000"
            style={{ width: "100%", marginTop: "25px" }}
          />
          <div
            style={{
              paddingTop: "7px",
              paddingInline: "53px",
              fontSize: "large",
            }}
          >
            ₹{pricerange}
          </div>
        </div>
        <div className="brand_Style">
          <details>
            <summary>BRAND</summary>
            <input
              type="text"
              placeholder="Search Brand"
              className="search_Brand"
            />
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            Apple
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            Samsung
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            Oneplus
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            Google
          </details>
        </div>
        <div className="brand_Style">
          <details>
            <summary>CUSTOMER RATINGS</summary>
            <input type="checkbox" style={{ margin: "10px" }} />4 ★ & above
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />3 ★ & above
          </details>
        </div>
        <div className="brand_Style">
          <details>
            <summary>RAM</summary>
            <input type="checkbox" style={{ margin: "10px" }} />4 GB
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />3 GB
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />2 GB
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />6 GB
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />8 GB and Above
            <br />
          </details>
        </div>
        <div className="brand_Style">
          <details>
            <summary>DISCOUNT</summary>
            <input type="checkbox" style={{ margin: "10px" }} />
            50% or more
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            40% or more
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            30% or more
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            20% or more
            <br />
            <input type="checkbox" style={{ margin: "10px" }} />
            10% or more
            <br />
          </details>
        </div>
      </div>
      <div className="right_sideConatiner">
        <div className="subheader_right_sideConatiner">
          <div className="sort_Style">Sort By</div>
          <div className="Selected_SubheadingStyle">Popularity</div>
          <div className="right_SubheadingStyle">Price-Low to High</div>
          <div className="right_SubheadingStyle">Price-High to Low</div>
          <div className="right_SubheadingStyle">Newest First</div>
        </div>
        {productData.map((item, index) => (
          <div className="Product_Container" key={index}>
            <img
              src={item.product_image}
              alt=""
              className="Mobile_Productstyle"
            />
            <div className="product_Heading">
              <Link to={`/User/Phone/${item.product_id}`} className="product_Heading">
                {item.product_name}
              </Link>

              <div
                style={{
                  fontSize: "15px",
                  color: "#212121",
                  paddingInline: "31px",
                  paddingTop: "8px",
                }}
              >
                <ul>
                  {item.product_details.split(",").map((detail, index) => (
                    <li key={index} style={{margin:"10px 0px"}}>{detail.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="product_PriceStyle">₹{item.product_price}
            <div className="rating">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={item.ratingcount}
                
              />
              <span style={{fontSize:'35px'}} className={ratingValue <= item.ratingcount ? "checked" : ""}>
                &#9733;
              </span>
            </label>
          );
        })}
      </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
