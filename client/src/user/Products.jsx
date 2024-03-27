import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Review.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Products() {
  const value = useParams("pid");
  //Here we are taking value as category_id
  const [productData, setProductData] = useState([]);
  const [subcategorydata, setSubCategoryData] = useState([]);
  const [arrayID, setArrayID] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pricerangevalue, setPricerangevalue] = useState([0, 400000]);

  const handleChange = (event, newValue) => {
    const [one, two] = newValue
    const filteredProductRange = productData.filter(
      (product) => product.product_price > one && product.product_price < two
    );
    setFilteredProducts(filteredProductRange);
    
    setPricerangevalue(newValue);
  };

  useEffect(() => {
    MobileData();
    getSubCategorydata();
    pricerangeBtnClick();
  }, [value]);

  const MobileData = () => {
    setArrayID([]);
    axios
      .get(`http://localhost:4777/Product_Mobile/${value.pid}`)
      .then((response) => response.data)
      .then((data) => {
        setProductData(data.mobile);
        setFilteredProducts(data.mobile);
      });
  };

  const getSubCategorydata = () => {
    setSubCategoryData([]);
    axios
      .get(`http://localhost:4777/SubCategory/${value.pid}`)
      .then((response) => response.data)
      .then((data) => {
        setSubCategoryData(data.subcategory);
      });
  };

  const brandbtnclicked = (id) => {
    setArrayID((prevState) => {
      // Check if the id is already present in the array
      const alreadyExists = prevState.some((item) => item === id);
      console.log(alreadyExists);
      let newArray;
      if (alreadyExists) {
        // If it already exists, remove it from the array
        newArray = prevState.filter((item) => item !== id);
      } else {
        // If it doesn't already exist, add it to the array
        newArray = [...prevState, id];
      }
      console.log(newArray);
      if (newArray.length === 0) {
        MobileData();
      } else {
        axios
          .get(`http://localhost:4777/SubcategoryMobileList/${newArray}`)
          .then((response) => response.data)
          .then((data) => {
            setFilteredProducts(data.mobile);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }

      return newArray; // Return the updated value from the state updater function
    });
  };

  //Price RAnge
  function valuetext(value) {
    return `${value}`;
  }
  const pricerangeBtnClick = (id) => {
    console.log(id);
    // axios.get(`http://localhost:4777/priceRangeList/'${id}'/'${value.pid}'`)
    // .then((response)=>response.data)
    // .then((data)=>{

    //   setProductData(data.mobile)
    //   setPricerange(id)
    // })

    const filteredProduct = productData.filter(
      (product) => product.product_price == id
    );
    setFilteredProducts(filteredProduct);
  };
  return (
    <div className="Mobile_mainConatiner">
      <div className="left_SideConatiner">
        <div className="filter_Style">Filters</div>

        <Box sx={{ width: 180, marginLeft: "20px", marginTop: "30px" }}>
          <Slider
            getAriaLabel={() => "price"}
            value={pricerangevalue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={100} // Minimum value
            max={1000000} // Maximum value
          />
        </Box>

        <div className="brand_Style">
          <details>
            <summary>BRAND</summary>
            <input
              type="text"
              placeholder="Search Brand"
              className="search_Brand"
            />

            {subcategorydata.map((row, key) => (
              <>
                <input
                  type="checkbox"
                  style={{ margin: "10px" }}
                  onClick={() => brandbtnclicked(row.subcategory_id)}
                />
                {row.subcategory_name} <br />
              </>
            ))}
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
        {filteredProducts.map((item, index) => (
          <div className="Product_Container" key={index}>
            <img
              src={item.product_image}
              alt=""
              className="Mobile_Productstyle"
            />
            <div className="product_Heading">
              <Link
                to={`/User/Phone/${item.product_id}`}
                className="product_Heading"
              >
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
                    <li key={index} style={{ margin: "10px 0px" }}>
                      {detail.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="product_PriceStyle">
              ₹{item.product_price}
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
                      <span
                        style={{ fontSize: "35px" }}
                        className={
                          ratingValue <= item.ratingcount ? "checked" : ""
                        }
                      >
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
