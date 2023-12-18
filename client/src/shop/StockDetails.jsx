import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css";
import { useParams } from 'react-router-dom';
export default function StockDetails() {
  const pid=useParams('id')
  const[productDetails,setProductDetails]=useState([])
  const[stocknos,setStocknos]=useState('')
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = () => {
    axios
      .get(`http://localhost:4777/StockDetailProductDataGet/${pid.id}`)
      .then((response) => response.data)
      .then((data) => {
       setProductDetails(data.product[0]) 
      });
  };
  const productid=productDetails.product_id
  const buttonClick=()=>{
   var dat={
    stocknos:stocknos,
    productid:productid
   }
  
   axios.post('http://localhost:4777/StockDetail',dat)
   .then((response)=>{
    if(response.data.message==="True"){
      window.location.reload()
    }
    else{
      alert("Failed")
    }
   })
  }
  return (

  <div className='StockDetailsMainContainer'>
    <div className='StockDetailsInputConatiner'>
     <div style={{paddingInline:"187px",marginTop:"20px"}}> <img src={productDetails.product_image} alt=""  width={"120px"}/></div>
      <div className='StockDetailsInputROW'>Product Name: <span style={{fontSize:"Larger"}}>{productDetails.product_name}</span></div>
     <div className='StockDetailsInputROW'>Stock Qty: <input type="number"  onChange={(e)=>setStocknos(e.target.value)} min='1'/></div>
     <div className='StockDetailsInputBtn' onClick={buttonClick}>Submit</div>
    </div>
    <div className='StockDetailsOutputConatiner'>
      <table>
        <tr>
          <td>Sl.No</td>
          <td>Date</td>
          <td>Stock Qty</td>
          <td>Action</td>
        </tr>
      </table>
    </div>
  </div>
  )
}
