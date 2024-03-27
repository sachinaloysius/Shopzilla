import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
import showpassword from './assets/showpasswordlogo.png'
import hidepassword from './assets/hidepasswordlog.png'
export default function Login() {
  const[useremail,setUseremail]=useState('')
  const[userpassword,setUserpassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  
  

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
        sessionStorage.setItem('uid',response.data.id);
         window.location="/User"
      }
      else if(response.data.login==="admin")
      {
        sessionStorage.setItem('aid',response.data.id);
        window.location="/Admin";
      }
      else
      {
        alert('Credentials Invalid');
      }
     
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-container'>

      <div className='logoalign'>Shopzilla</div>

      <div className='remark'><p>Email</p>
       <input type="text"  placeholder='Enter Email' onChange={(e)=>setUseremail(e.target.value)}/>
      </div>

      <div className='remark'><p>Password </p>
      <input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' value={userpassword} onChange={(e)=>setUserpassword(e.target.value)} />
      <button onClick={togglePasswordVisibility}> <img src={showPassword? showpassword:hidepassword}  alt="showpassword" className='showpassword_btnStyle' /> </button> 
      </div>

      <button onClick={buttonClick}>Login</button>
    </div>


  )
}
