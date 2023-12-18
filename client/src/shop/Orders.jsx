import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Orders() {
  const sid = sessionStorage.getItem("sid");
  const [displayOut, setDisplayOut] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = () => {
    axios
      .get("http://localhost:4777/ShopOrder/" + sid)
      .then((response) => response.data)
      .then((data) => {
        setDisplayOut(data.shoporderread);
      });
  };

  const buttonClickStatus = (id, status) => {
    axios
      .post("http://localhost:4777/CartStatus", { id: id, status: status })
      .then((response) => response.data)
      .then((data) => {
        getProductDetails();
      });
  };
  return (
    <div className="Shop_OrderConatiner">
      <table
        border="1px soild black"
        style={{ marginInline: "300px" }}
      >
        <tr>
          <td >Srl.no</td>
          <td>Booking Date</td>
          <td>User Name</td>
          <td> Product Name</td>
          <td>Product Qty</td>
          <td>Action</td>
        </tr>
        {displayOut.map((row, key) => (
          <tr>
            <td >{key + 1}</td>
            <td >{row.booking_date}</td>
            <td>{row.user_name}</td>
            <td > {row.product_name}</td>
            <td >{row.cart_quantity}</td>
            <td>
              {row.cart_status === 1 ? (
                <button onClick={() => buttonClickStatus(row.cart_id, 2)}>
                  Packing
                </button>
              ) : row.cart_status===2?(
                <>
                  Packed ||
                   <button onClick={() => buttonClickStatus(row.cart_id, 3)}>
                    Dispatch
                  </button>
                </>
              ):row.cart_status===3?(
                <>
                Dispatched ||
                <button onClick={()=>buttonClickStatus(row.cart_id,4)}>Ship</button>
                </>
              ):row.cart_status===4?(
                <>
                Shiped ||
                <button onClick={()=>buttonClickStatus(row.cart_id,5)}>Deliver</button>
                </>
              ):"Delivered"
            }
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
