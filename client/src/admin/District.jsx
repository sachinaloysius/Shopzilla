import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function District() {
  const[districtinput,setDistrictinput]=useState('')
  const[districtoutput,setDistrictoutput]=useState([])
  useEffect(()=>{
 getdistrictdata()
  },[])
  const getdistrictdata=()=>{
    axios.get("http://localhost:4777/District")
    .then((response)=>response.data)
    .then((data)=>{
      setDistrictoutput(data.district)
    })
  }
  const buttonClick=()=>{
    var dat={
     districtinput:districtinput 
    }
    axios.post("http://localhost:4777/District" , dat)
    .then((response)=>{
      if(response.data.message==="Data Saved"){
        setDistrictinput("");
        getdistrictdata()
      }
      else{
        alert("Failed")
      }
    })
  }

  const buttonDelete=(delid)=>{
    axios.delete("http://localhost:4777/District/" + delid)
    .then((response)=>response.data)
    .then((data)=>{
      getdistrictdata()
    })
  }
  return (
    <div className='maincontainer'>
      <div className='tableinputconatiner'>
       <div>District<input type="text" value={districtinput} onChange={(e)=>setDistrictinput(e.target.value)} /></div>
       <div><button onClick={buttonClick}>Submit</button></div>
      </div>
      <div className='tableoutputconatiner'>
       <div className='columnmain'>
        <div className='column'>slno</div>
        <div className='column'>Name</div>
        <div className='column'>Action</div>
       </div>
       {districtoutput.map((row,key)=>(
         <div className='columnmain'>
        <div className='column'>{key+1}</div>
        <div className='column'>{row.district_name}</div>
        <div className='column'><button onClick={()=>buttonDelete(row.district_id)}>Delete</button></div>
       </div>
       ))}
      
      </div>
    </div>
  )
}
