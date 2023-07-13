import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
    const shopid=sessionStorage.getItem('sid')
    const[productdata,setProductdata]=useState([])
   useEffect(()=>{
    getProductdata()
   },[])
    const getProductdata=()=>{
        axios.get("http://localhost:4777/Product/" +shopid)
        .then((response)=>response.data)
        .then((data)=>{
            setProductdata(data.product)
        })
    }
  return (
    <div className="Productsmaincontainer">
     <table border="1">
        <tr>
         <td>Product Name</td>
         <td>Product Price</td>
         <td>Product Details</td>
         <td>Product Image</td>
        </tr>
        {productdata.map((row,key)=>(
            <tr>
                <td>{row.product_name}</td>
                <td>{row.product_price}</td>
                <td>{row.product_details}</td>
                <td><img width="100px" height="100px" src={row.product_image} alt="" /></td>
            </tr>
        ))}
     </table>
    </div>
  );
}
