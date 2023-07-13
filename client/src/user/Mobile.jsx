import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Mobile() {
  const [pricerange, setPricerange] = useState("");
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
        <div style={{paddingTop:"7px",paddingInline:"53px",fontSize:"large"}}>₹{pricerange}</div> 
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
        <div className="Product_Style">
          <div className="Product_Container">
            <img
              src="https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
              alt=""
              className="Mobile_Productstyle"
            />
            <div className="product_Heading">
             <Link to="/Iphone13mini" className="product_Heading">Apple iPhone 13 (Midnight,128 GB)</Link> 
              <div
                style={{
                  fontSize: "15px",
                  color: "#212121",
                  paddingInline: "31px",
                  paddingTop: "8px",
                }}
              >
                128 GB ROM
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#212121",
                  paddingInline: "31px",
                  paddingTop: "5px",
                }}
              >
                15.49 cm(6.1inch) Super Retina XDR Display
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#212121",
                  paddingInline: "31px",
                  paddingTop: "5px",
                }}
              >
                {" "}
                12MP + 12 MP Front Camera
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#212121",
                  paddingInline: "31px",
                  paddingTop: "5px",
                }}
              >
                {" "}
                A15 Bionic Chip Processor
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#212121",
                  paddingInline: "31px",
                  paddingTop: "5px",
                }}
              >
                Brand Warranty for 1 Year
              </div>
            </div>
          </div>
          <div className="product_PriceStyle">₹60,999</div>
        </div>
        <div className="Product_Container">
          <img
            src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70"
            alt=""
            className="Mobile_Productstyle"
          />
          <div className="product_Heading">
            Apple iPhone 14 (Starlight,128 GB)
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "8px",
              }}
            >
              128 GB ROM
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              15.49 cm(6.1inch) Super Retina XDR Display
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              12MP + 12 MP Front Camera
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              A15 Bionic Chip 6 Core Processor
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              1 Year Warranty for Phone and 6 Months Warranty for In-Box
              Accessories
            </div>
          </div>
          <div className="product_PriceStyle">₹70,999</div>
        </div>
        <div className="Product_Container">
          <img
            src="https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/y/j/1/-original-imagca5ge9yrbrzq.jpeg?q=70"
            alt=""
            className="Mobile_Productstyle"
          />
          <div className="product_Heading">
            Apple iPhone 13 mini (Green,512 GB)
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "8px",
              }}
            >
              512 GB ROM
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              13.72 cm(5.4inch) Super Retina XDR Display
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              12MP + 12 MP Front Camera
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              A15 Bionic Chip 6 Core Processor
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              Brand Warranty for 1 Year
            </div>
          </div>
          <div className="product_PriceStyle">₹89,999</div>
        </div>
        <div className="Product_Container">
          <img
            src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/l/o/-original-imagmg6gzjf7gggt.jpeg?q=70"
            alt=""
            className="Mobile_Productstyle"
          />
          <div className="product_Heading">
            Samsung Galaxy S23 Ultra 5G (Green,512 GB)
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "8px",
              }}
            >
              512 GB ROM
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              13.72 cm(5.4inch) Super Retina XDR Display
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              12MP + 12 MP Front Camera
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              A15 Bionic Chip 6 Core Processor
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              Brand Warranty for 1 Year
            </div>
          </div>
          <div className="product_PriceStyle">₹1,34,999</div>
        </div>
        <div className="Product_Container">
          <img
            src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70"
            alt=""
            className="Mobile_Productstyle"
          />
          <div className="product_Heading">
            Samsung Galaxy S23 Ultra 5G (Cream,512 GB)
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "8px",
              }}
            >
              512 GB ROM
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              13.72 cm(5.4inch) Super Retina XDR Display
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              12MP + 12 MP Front Camera
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              A15 Bionic Chip 6 Core Processor
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#212121",
                paddingInline: "31px",
                paddingTop: "5px",
              }}
            >
              {" "}
              Brand Warranty for 1 Year
            </div>
          </div>
          <div className="product_PriceStyle">₹1,34,999</div>
        </div>
      </div>
    </div>
  );
}
