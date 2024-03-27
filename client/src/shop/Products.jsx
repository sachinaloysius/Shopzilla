import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Products() {
  const shopid = sessionStorage.getItem("sid");
  const [productdata, setProductdata] = useState([]);
  // const [details, setDetails] = useState([]);
 

  
  const getProductdata = () => {
    axios
      .get("http://localhost:4777/Product/" + shopid)
      .then((response) => response.data)
      .then((data) => {
        setProductdata(data.product);
      });
  };

  const buttonClick = (delid) => {
    axios
      .delete("http://localhost:4777/ProductDelete/" + delid)
      .then((response) => response.data)
      .then((data) => {
        getProductdata();
      });
  };

  useEffect(() => {
    getProductdata();
  }, []);


  return (
    <div className="Productsmaincontainer">
      <table border="1">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Details</th>
            <th>Product Image</th>
            <th>Action</th>
            <th>Add Images</th>
            <th>Stocks</th>
          </tr>
        </thead>
        <tbody>
          {productdata.map((row, key) => (
            <tr key={key}>
              <td>{row.product_name}</td>
              <td>{row.product_price}</td>
              <td>
                <ul style={{ marginLeft: "30px", marginRight: "30px" }}>
                  {row.product_details.split(",").map((detail, index) => (
                    <li key={index} style={{ margin: "10px 0px" }}>
                      {detail.trim()}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <img
                  width="100px"
                  height="100px"
                  src={row.product_image}
                  alt=""
                />
              </td>
              <td>
                <button onClick={() => buttonClick(row.product_id)}>
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/Shop/Gallery/${row.product_id}`}>Click Here</Link>
              </td>
              <td>
                <Link to={`/Shop/StockDetails/${row.product_id}`}>AddStocks</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
