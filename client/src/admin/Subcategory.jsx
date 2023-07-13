import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Common.css"

export default function Subcategory() {
  const [CategoryData, setCategoryData] = useState([]);
  const [inputdata, setInputdata] = useState("");
  const [categoryselect, setCategoryselect] = useState("");
  const [subcategoryoutputdata, setSubcategoryoutputdata] = useState([]);
  const [id,setId]=useState('')

  const getcategory = () => {
    axios
      .get("http://localhost:4777/Category")
      .then((response) => response.data)
      .then((data) => {
        setCategoryData(data.category);
      });
  };
  useEffect(() => {
    getcategory();
    getsubcategory();
  }, []);

  const getsubcategory = () => {
    axios
      .get("http://localhost:4777/Subcategory")
      .then((response) => response.data)
      .then((data) => {
        setSubcategoryoutputdata(data.subcategory);
      });
  };

  const buttonclick = () => {
    var dat = {
      categoryselect: categoryselect,
      //categoryselect first is  key name for data
      //categoryselect second is data stored from dropdown
      inputdata: inputdata,
      eid:id,
    };
    if(id===""){
      axios.post("http://localhost:4777/Subcategory", dat).then((response) => {
      if (response.data.message === "SubCategory Data Saved") {
        alert("Data Saved");
        window.location.reload();
      } else {
        alert("Failed");
      }
    });
    }
    else{
      axios.put("http://localhost:4777/SubcategoryUpdate",dat)
      .then((response)=>{
        if(response.data.message==="Data Updated"){
          alert("Data Updated")
          window.location.reload()
        }
        else{
          alert("Failed")
        }
      })
    }
    
  };
  const buttonclickdel=(delid)=>{
axios.delete("http://localhost:4777/Subcategory/"+delid)
.then((response)=>response.data)
.then((data)=>{
  getsubcategory();
})
  }
const buttonedit=(id)=>{
setId(id)
axios.get("http://localhost:4777/SubcategoryUpdate/"+id )
.then((response)=>response.data)
.then((data)=>{
  setInputdata(data.update[0].subcategory_name)
})
}
  return (
    <div className="container">
    <div className="inputtable">
      <div className="row">
        <p>Category</p>
        <select
          name=""
          id=""
          onChange={(e) => setCategoryselect(e.target.value)}
          className="dropdown"
        >
          <option value="">Select</option>
          {CategoryData.map((row, key) => (
            <option value={row.category_id}>{row.category_name}</option>
          ))}
        </select>
      </div>
      <div className="row">
        <p>Subcategory</p>
        <input
          type="text"
          value={inputdata}
          onChange={(e) => setInputdata(e.target.value)}
          className="textbox"
          placeholder="Enter Subcategory"
        />
      </div>
      <button className="submitbutton" onClick={buttonclick}>
        Submit
      </button>
    </div>
    <div className="outputtable">
      <div className="columnmain">
        <div className="column">Sl.No</div>
        <div className="column">Subcategory</div>
        <div className="column">Category</div>
        <div className="column">Action</div>
      </div>
      {subcategoryoutputdata.map((row, key) => (
        <div className="columnmain">
          <div className="column">{key + 1}</div>
          <div className="column">{row.subcategory_name}</div>
          <div className="column">{row.category_name}</div>
          <div className="column">
          
            <lord-icon
              src="https://cdn.lordicon.com/jmkrnisz.json"
              trigger="hover"
              onClick={() => buttonclickdel(row.subcategory_id)}
              style={{"width":"16px","height":"16px","cursor":"pointer"}} 
            ></lord-icon>
            <span>
              <span style={{"cursor":"pointer","margin":"12px",color:"blue"}} onClick={()=>buttonedit(row.subcategory_id)}> Edit</span> 
            </span>
        
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
