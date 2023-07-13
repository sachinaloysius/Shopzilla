import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
export default function Login() {
  const[useremail,setUseremail]=useState('')
  const[userpassword,setUserpassword]=useState('')
  

  const buttonClick =()=>{
    var dat={
      useremail:useremail,
      userpassword:userpassword,
      
    }

    axios.post("http://localhost:4777/Login",dat)
    .then((response)=>{
      if(response.data.login==="shop"){
        sessionStorage.setItem('sid',response.data.id);
        window.location="/Shop"
      }
      else if(response.data.login==="user"){
       
      }
      else if(response.data.login==="admin")
      {
        window.location="/Admin";
      }
      else
      {
        alert('Credentials Invalid');
      }
     
    })
  }
  return (
    <div className='login-container'>

      <div className='logoalign'>Shopzilla</div>

      <div className='remark'><p>Email</p>
       <input type="text"  placeholder='Enter Email' onChange={(e)=>setUseremail(e.target.value)}/>
      </div>

      <div className='remark'><p>Password </p>
      <input type="password" placeholder='Enter Password' onChange={(e)=>setUserpassword(e.target.value)} />
      </div>

      <button onClick={buttonClick}>Login</button>
    </div>


  )
}
