import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
export default function Product() {
    const shopid = sessionStorage.getItem('sid');
    const[categorydata,setCateogrydata]=useState([])
    const[subcategorydata,setSubcatgeorydata]=useState([])
    const[subcategoryid,setSubcategoryid]=useState('')
    const[productname,setProductname]=useState("")
    const[productprice,setProductprice]=useState('')
    const[productdetails,setProductdetails]=useState('')
    const[productimage,setProductimage]=useState('')
    
    useEffect(()=>{
      getCategory()
    },[])
   const getCategory=()=>{
    axios.get("http://localhost:4777/Category")
    .then((response)=>response.data)
    .then((data)=>{
        setCateogrydata(data.category)
    })
   }
 const getSubcategory=(getid)=>{
    axios.get("http://localhost:4777/Subcategory/"+ getid)
    .then((response)=>response.data)
    .then((data)=>{
        setSubcatgeorydata(data.subcategory)
    })
 }

const buttonClick=()=>{
    const frm=new FormData();
      frm.append("shopid",shopid)
      frm.append("productname",productname)
      frm.append("productprice",productprice)
      frm.append("productdetails",productdetails)
      frm.append("productimage",productimage)
      frm.append("subcategoryid",subcategoryid)

    axios.post("http://localhost:4777/Product",frm)
    .then((response)=>{
     if(response.data.message==="Data Saved"){
      window.location.reload()
     }
     else{
      alert("Failed")
     }
    })
}
  return (
    <div className="productmaincontainer">
      <div className="productbox">
        <div className="row">
          <span>Name</span>
          <span>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setProductname(e.target.value)} />
          </span>
        </div>
        <div className="row">
          <span>Price</span>
          <span>
            <input type="text" placeholder="Enter Price"  onChange={(e)=>setProductprice(e.target.value)}/>
          </span>
        </div>
        <div className="row">
          <span>Details</span>
          <span>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setProductdetails(e.target.value)}></textarea>
          </span>
        </div>
        <div className="row">
          <span>Category</span>
          <span>
            <select name="" id="" onChange={(e)=>getSubcategory(e.target.value)}>
              <option value="">Select Category</option>
              {categorydata.map((row,key)=>(
                <option value={row.category_id}>{row.category_name}</option>
              ))}
            </select>
          </span>
        </div>
        <div className="row">
          <span>SubCategory</span>
          <span>
            <select name="" id="" onChange={(e)=>setSubcategoryid(e.target.value)}>
              <option value="">Select SubCategory</option>
              {subcategorydata.map((row,key)=>(
                <option value={row.subcategory_id}>{row.subcategory_name}</option>
              ))}
            </select>
          </span>
        </div>
        <div className="row">
          <span>Upload Images</span>
          <span>
            <input type="file" onChange={(e)=>setProductimage(e.target.files[0])} />
          </span>
        </div>
        <button style={{paddingInline:"127px",marginInline:"62px",height:"37px"}} onClick={buttonClick}>Submit</button>
      </div>
    </div>
  );
}
