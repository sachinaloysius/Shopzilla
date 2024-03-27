import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Category () {
  const [category, setCategory] = useState("");
  const [categorydata, setCategoryData] = useState([]);
  const buttonclick = () => {
    var dat = {
      category: category,
    };
    axios.post("http://localhost:4777/Category", dat).then((response) => {
      if (response.data.message === "Data Saved") {
        alert("Data Saved");
        window.location.reload()
      } else {
        alert("Failed");
      }
    });
    getCategory();
  };

  const getCategory = () => {
    axios
      .get("http://localhost:4777/Category")
      .then((response) => response.data)
      .then((data) => {
        setCategoryData(data.category);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  const buttonDelete = (delid) => {
    console.log(delid);
    axios
      .delete("http://localhost:4777/Category/" + delid)
      .then((response) => response.data)
      .then((data) => {
        getCategory();
      });
  };
  return (
     <div className='maincontainer'>
      <div className='tableinputconatiner'>
       <div>Category<input type="text" onChange={(e)=>setCategory(e.target.value)} /></div>
       <div><button onClick={buttonclick}>Submit</button></div>
      </div>
      <div className='tableoutputconatiner'>
       <div className='columnmain'>
        <div className='column'>slno</div>
        <div className='column'>Name</div>
        <div className='column'>Action</div>
       </div>
       {categorydata.map((row,key)=>(
         <div className='columnmain'>
        <div className='column'>{key+1}</div>
        <div className='column'>{row.category_name}</div>
        <div className='column'><button onClick={()=>buttonDelete(row.category_id)}>Delete</button></div>
       </div>
       ))}
      
      </div>
    </div>
  )
}