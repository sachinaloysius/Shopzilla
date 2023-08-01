import React from 'react'
import Shoplogo from "./assets/shoplogo.jpg"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div className='shop-container'>
       <p style={{fontSize:"35px",color:"#0c95e4",paddingInline:"108px"}}>Shopzilla <p style={{fontSize:"18px",paddingInline:"64px",color:"red",marginTop:"-10px"}}>Shop hub</p></p>
        <ul>
          <li><Link to="/Shop/Product" className='ulstyle'>Add Product</Link></li>
          <li><Link className='ulstyle'>Booking</Link></li>
          <li><Link to="/Shop/Products" className='ulstyle'>Products</Link></li>
          <li><Link to="/Shop/Orders" className='ulstyle'>Order</Link></li>
          <li><Link className='ulstyle'>Logout</Link></li>
          <img src={Shoplogo} style={{width:"70px"}} alt="" />
        </ul>
        
    </div>
  )
}
