import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Orders() {
    const uid=sessionStorage.getItem('uid')
    console.log(uid);
    const[displayout,setDisplayout]=useState([])
       useEffect(()=>{
        getOrderDetails()
       },[])
    const getOrderDetails=()=>{
        axios.get("http://localhost:4777/Order/"+ uid)
        .then((response)=>response.data)
        .then((data)=>{
            setDisplayout(data.orderdetailsread)
        }) 
    }
  return (
    
    <div className='OrderPage_Container'>
        <table border="1px soild black"  style={{marginInline:"250px",marginTop:"20px"}}>
           <tr>
                <td width="200px">Srlno</td>
                <td width="200px">Booking Date</td>
                <td width="200px">Booking Amount</td>
                <td width="200px">Action</td>
            </tr>  
            {displayout.map((row,key)=>(
                <tr>
                 <td width="200px">{key+1}</td>
                <td width="200px"> {row.booking_date}</td>
                <td width="200px">{row.booking_amount}</td>
                <td width="200px"><Link to={`/User/OrderDetails/${row.booking_id}`}>View Details</Link></td>  
                </tr>
            ))}
        </table>
    </div>
  )
}
