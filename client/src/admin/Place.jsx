import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Place() {
  const [inputdata, setInputdata] = useState("");
  const [districtselect, setDistrictselect] = useState("");
  const [districtdata, setDistrictdata] = useState([]);
  const [placedataoutput, setPlacedataoutput] = useState([]);

  const getdistrict = () => {
    axios
      .get("http://localhost:4777/District")
      .then((response) => response.data)
      .then((data) => {
        setDistrictdata(data.district);
      });
  };
  useEffect(() => {
    getdistrict();
    getplace();
  }, []);
  const buttonclick = () => {
    var dat = {
      inputdata: inputdata,
      districtselect: districtselect,
    };
    axios.post("http://localhost:4777/Place", dat).then((response) => {
      if (response.data.message === "Place Data Saved") {
        getdistrict();
        getplace();
        setInputdata('')
        districtselect('')
      } else {
        alert("Failed");
      }
    });
  };
  const getplace = () => {
    axios
      .get("http://localhost:4777/Place")
      .then((response) => response.data)
      .then((data) => {
        setPlacedataoutput(data.place);
      });
  };
  const buttondel = (delid) => {
    axios
      .delete("http://localhost:4777/Place/" + delid)
      .then((response) => response.data)
      .then((data) => {
        getplace();
      });
  };
  return (
    <div className="container">
      <div className="inputtable">
        <div className="row">
          <p>District</p>
          <select
            name=""
            id=""

            onChange={(e) => setDistrictselect(e.target.value)}
            className="dropdown"
          >
            <option value="">Select</option>
            {districtdata.map((row, key) => (
              <option value={row.district_id}>{row.district_name}</option>
            ))}
          </select>
        </div>
        <div className="row">
          <p>Place</p>
          <input
            type="text"
            value={inputdata}
            onChange={(e) => setInputdata(e.target.value)}
            className="textbox"
            placeholder="Enter Place"
          />
        </div>
        <button className="submitbutton" onClick={buttonclick}>
          Submit
        </button>
      </div>
      <div className="outputtable">
        <div className="columnmain">
          <div className="column">Sl.No</div>
          <div className="column">Place</div>
          <div className="column">District</div>
          <div className="column">Action</div>
        </div>
        {placedataoutput.map((row, key) => (
          <div className="columnmain">
            <div className="column">{key + 1}</div>
            <div className="column">{row.place_name}</div>
            <div className="column">{row.district_name}</div>
            <div className="column">
            
              <lord-icon
                src="https://cdn.lordicon.com/jmkrnisz.json"
                trigger="hover"
                onClick={() => buttondel(row.place_id)}
                style={{"width":"25px","height":"25px"}}
              ></lord-icon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
