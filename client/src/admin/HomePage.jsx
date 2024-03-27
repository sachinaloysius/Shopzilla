import React, { useEffect, useState } from "react";
import PieChart from './PieChart'
import coinlogo from "./assets/coinlogo.gif";
import shoppingbaglogo from './assets/shoppinglogo.gif'
import customerslogo from './assets/profile_piclogo.gif'
import walletlogo from './assets/wallet_logo.gif'
import axios from 'axios'
import BarChart from "./BarChart";
export default function HomePage() {
  const[totalEarnings,setTotalEarnings]=useState([])
  const[totalOrders,setTotalOrders]=useState([])
  const[totalCustomers,setTotalCustomers]=useState([])
  useEffect(()=>{
    getTotalEarnings()
    getTotalOrders()
    getTotalCustomers()
  },[])

  const getTotalEarnings=()=>{
    axios.get('http://localhost:4777/TotalEarnings')
    .then((response)=>response.data)
    .then((data)=>{
      setTotalEarnings(data.sum[0].sum)
    
    })
  }
const getTotalOrders=()=>{
  axios.get('http://localhost:4777/TotalOrders')
  .then((response)=>response.data)
.then((data)=>{
  setTotalOrders(data.bookingcount[0].bookingcount)
})
}

const getTotalCustomers=()=>{
  axios.get('http://localhost:4777/TotalCustomers')
  .then((response)=>response.data)
  .then((data)=>{
  setTotalCustomers((data.customercount[0].customercount))
  
  })
}
  
  return (
    <div>
      <div style={{display:"flex",justifyContent:'space-evenly',marginTop:"15px"}}>
      <div className="Admin_ChartBox">
        <div className="First_row">
          TOTAL EARNINGS
          <p>+16.24 %</p>
        </div>
        <div className="Second_row"> ₹{totalEarnings}</div>
        <div className="Third_row">
          <a href="">View net earnings</a>
          <img src={coinlogo} alt="" className="logo_align" width={40} />
        </div>
      </div>
      
      <div className="Admin_ChartBox">
      <div className="First_row">
          ORDERS
          <p>-3.57 %</p>
        </div>
        <div className="Second_row">{totalOrders}</div>
        <div className="Third_row">
          <a href="">View all orders</a>
          <img src={shoppingbaglogo} alt="" className="logo_align" width={40} />
        </div>
      </div>
      <div className="Admin_ChartBox">
      <div className="First_row">
          CUSTOMERS
          <p>+29.08 %</p>
        </div>
        <div className="Second_row">{totalCustomers}</div>
        <div className="Third_row">
          <a href="">See details</a>
          <img src={customerslogo} alt="" className="logo_align" width={40} />
        </div>
      </div>
      
      <div className="Admin_ChartBox">
      <div className="First_row">
          MY BALANCE
          <p>+0.00 %</p>
        </div>
        <div className="Second_row">$165.89k</div>
        <div className="Third_row">
          <a href="">Withdraw money</a>
          <img src={walletlogo} alt="" className="logo_align" width={40} />
        </div>
      </div>
      </div>
      <div style={{marginTop:"30px",display:"flex",justifyContent:"space-evenly"}}>
        <div><PieChart/></div>
        <div><BarChart/></div>
      </div>
    </div>
  );
}
