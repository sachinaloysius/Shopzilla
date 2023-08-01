import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function OrderDetails() {
  const {bid}=useParams()
  const[displayout,setDisplayout]=useState([])
 
  useEffect(()=>{
    getProductDetails()
  },[])
  const getProductDetails=()=>{
    axios.get("http://localhost:4777/OrderDetails/"+ bid)
    .then((response)=>response.data)
    .then((data)=>{
      setDisplayout(data.OrderProductDetails)
    })
  }

  const buttonClickCancelOrder=(pid)=>{
   var dat={
    bid:bid,
    pid:pid
   }
   axios.post('http://localhost:4777/CancelOrder' , dat)
   .then((response)=>{
    if(response.data.message==="True"){
      alert("Order Cancelled")
      getProductDetails()
    }
    else{
      alert('Failed')
    }
   })
  }
  return (
      
    <div className='OrderDetails_Conatiner'>
     <table border="1px soild black"  style={{marginInline:"250px",marginTop:"20px"}}>
           <tr>
                <td width="200px">Srlno</td>
                <td width="200px">Product Image</td>
                <td width="200px">Product Name</td>
                <td>Action</td>
            </tr>  
            {displayout.map((row,key)=>(
              <tr>
                <td width="200px">{key+1}</td>
                <td width="200px"><img src={row.product_image}  width={"100px"}alt="" /></td>
                <td width="200px">{row.product_name}</td>
                <td><button style={{backgroundColor:'red',color:"white",border:"none"}} onClick={()=>buttonClickCancelOrder(row.product_id)}>Cancel Order</button></td>
              </tr>
            ))}
            </table>
    </div>
  )
}
