import React, { useEffect, useState } from 'react'
import AccountProPic from './assets/accountsettingpic.gif'
import LogoutLogo from './assets/logout.gif'
import Bottomimg from './assets/bottom.png'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
const userid=sessionStorage.getItem('uid')

export default function Userprofile() {
  const[userDetails,setUserDetails]=useState([])
  
  const history=useNavigate()
  const [isEditFullname, setIsEditFullname] = useState(false);
  const[fullname,setFullName]=useState('')
  const[isEditEmail,setIsEditEmail]=useState(false);
  const[email,setEmail]=useState('')
  const[isEditMobile,setIsEditMobile]=useState(false)
  const[mobile,setMobile]=useState('')

 
const handleEditFullname=()=>{
  setIsEditFullname(true)
}

const handleCancelFullname=()=>{
  setIsEditFullname(false)
}

const handleEditEmail=()=>{
  setIsEditEmail(true)
}

const handleCancelEmail=()=>{
  setIsEditEmail(false)
}

const handleEditMobile=()=>{
  setIsEditMobile(true)
}

const handleCancelMobile=()=>{
  setIsEditMobile(false)
}




useEffect(()=>{
GetUserDetails()

},[])
  const GetUserDetails=()=>{
   axios.get('http://localhost:4777/UserDetails/'+ userid)
   .then((response)=>response.data)
    .then((data)=>{
     setUserDetails(data.User)
     setFullName(data.User[0].user_name)
     setEmail(data.User[0].user_email)
     setMobile(data.User[0].user_contact)
    })
  }
  const Logout=()=>{
    history("/");
    sessionStorage.clear();
  }

  const SaveDetails=()=>{
    var dat={
      fullname:fullname,
      email:email,
      mobile:mobile,
      userid:userid
    }
    axios.put('http://localhost:4777/UpdateUserDetails/',dat)
    .then((response)=>{
      
      if(response.data.message==="Data Updated"){ 
        window.location.reload()
      }
    
      else{
        alert('Failed')
      }
      
    })
    
  }
  return (
    <div className='UserProfileMainHolder'>
      <div className="UserProfileHolder">
        <div className='UserProfileLeftHolder'>
          {userDetails.map((row,key)=>(
             <div key={key} className='profileNameHolder'>
            <img src={row.user_photo} width='60px' height='60px' alt="profilepictureUser" style={{borderRadius:'50%',margin:'9px 0 0 9px'}} />
            <div>
               <p style={{margin:'18px 0 0 12px '}}>Hello,</p>
            <h4 style={{marginLeft:'10px',letterSpacing:'1px'}}>{row.user_name}</h4>
            </div>
          </div>
          ))}
          <div className='Account_settingHolderUP'>
            <div style={{display:'flex'}}>
              <img src={AccountProPic} width='30px' height='28px' alt="AccountProPic" style={{marginLeft:'7px'}}/>
           <h4 style={{marginTop:"10px",color:'#878787' ,marginLeft:'7px'}}>ACCOUNT SETTINGS</h4>
            </div>
             <div className="subLists">Personal Information</div>
             <div className="subLists">Manage Addresses</div>
             <div className="subLists">My Order</div>
          </div>
          <div className='Logout_UP'>
            <img src={LogoutLogo} width='25px' height='27px' alt="LogoutLogo" style={{marginLeft:'7px' ,marginTop:"5px"}} />
            <h4  onClick={Logout}> Logout</h4>
          </div>
        </div>
        <div className='UserProfilerightHolder'>
          <div style={{display:'flex'}}>
            <div className='Headingstyle_UP'>Personal Information</div>
           {!isEditFullname?<div className='HeadingEditStyle_UP' onClick={handleEditFullname}>Edit</div>:<div className='HeadingEditStyle_UP' onClick={handleCancelFullname}>Cancel</div>} 
          </div>
          <div className='commonrow_UP' >
          <input type="text" defaultValue={fullname} disabled={!isEditFullname} onChange={(e)=>setFullName(e.target.value)} />
            {!isEditFullname?<div></div>:<button className='EditbuttonOnProfile' onClick={SaveDetails}>Save</button>}
          </div>
          <div style={{display:'flex'}}>
            <div className='Headingstyle_UP'>Email Address</div>
           {!isEditEmail?<div className='HeadingEditStyle_UP' onClick={handleEditEmail}>Edit</div>:<div className='HeadingEditStyle_UP' onClick={handleCancelEmail}>Cancel</div> } 
          </div>
          <div className='commonrow_UP' >
            <input type="text"  defaultValue={email} onChange={(e)=>setEmail(e.target.value)} disabled={!isEditEmail}/>
            {!isEditEmail?<div></div>:<button className='EditbuttonOnProfile' onClick={SaveDetails}>Save</button>}
          </div>
          <div style={{display:'flex'}}>
            <div className='Headingstyle_UP'>Mobile Number</div>
           {!isEditMobile?<div className='HeadingEditStyle_UP' onClick={handleEditMobile}>Edit</div>:<div className='HeadingEditStyle_UP' onClick={handleCancelMobile}>Cancel</div>} 
          </div>
          <div className='commonrow_UP' >
            <input type="text" defaultValue={mobile} onChange={(e)=>setMobile(e.target.value)} disabled={!isEditMobile}/>
            {!isEditMobile?<div></div>:<button className='EditbuttonOnProfile' onClick={SaveDetails}>Save</button>}
          </div>
          <img src='	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png' alt='Bottomimg' height="170px" width="900px" style={{marginTop:'30px'}}/>
        </div>
       
      </div>
        
    </div>
  )
}
