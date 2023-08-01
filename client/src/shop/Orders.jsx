import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Orders() {
    const sid=sessionStorage.getItem('sid')
    const[displayOut,setDisplayOut]=useState([])
    
   useEffect(()=>{
    getProductDetails()
   },[])
    const getProductDetails=()=>{
        axios.get("http://localhost:4777/ShopOrder/" + sid)
        .then((response)=>response.data)
        .then((data)=>{
        setDisplayOut(data.shoporderread)
        })
    }
  return (
    <div className='Shop_OrderConatiner'>
      <table width="1000px" border="1px soild black" style={{marginInline:"300px"}}>
        <tr>
            <td width="80px">Srl.no</td>
            <td width="100px">Booking Date</td>
            <td width="200px">User Name</td>
            <td width="520px"> Product Name</td>
            <td width="100px">Product Qty</td>
        </tr>
        {displayOut.map((row,key)=>(
              <tr>
              <td width="80px">{key+1}</td>
              <td width="100px">{row.booking_date}</td>
              <td width="200px">{row.user_name}</td>
              <td width="520px"> {row.product_name}</td>
              <td width="100px">{row.cart_quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
