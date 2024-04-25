import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Createaccount() {
  const [districtdata, setDistrictdata] = useState([]);
  const [placedata, setPlacedata] = useState([]);
  const [fullname, setFullname] = useState("");
  const [countrycode, setCountrycode] = useState(+91);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profliepic, setProfilepic] = useState("");
  const [placeid, setPlaceid] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getdistrict();
  }, []);
  const getdistrict = () => {
    axios
      .get("http://localhost:4777/District")
      .then((response) => response.data)
      .then((data) => {
        setDistrictdata(data.district);
      });
  };

  const getplace = (disid) => {
    axios
      .get("http://localhost:4777/Place/" + disid)
      .then((response) => response.data)
      .then((data) => {
        setPlacedata(data.place);
      });
  };

  const buttonClick = () => {
   
    const frm = new FormData();
    frm.append("fullname", fullname);
    frm.append("countrycode", countrycode);
    frm.append("contact", contact);
    frm.append("email", email);
    frm.append("password", password);
    frm.append("profilepic", profliepic);
    frm.append("placeid", placeid);
    axios.post("http://localhost:4777/User", frm).then((response) => {
      if (response.data.message === "Data Saved") window.location.reload();
      else {
        alert("Failed");
      }
    });
  };

  const handlePassword = (event) => {
    var NewPassword = event.target.value;
    setPassword(NewPassword);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
      NewPassword
    );
    setCheck(!isValidPassword);
    
  };

  const handleEmail=(event)=>{
   var NewEmail=event.target.value
   setEmail(NewEmail);
   const isValidEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(NewEmail);
   setCheck(!isValidEmail)
  }

  const handleMobile=(e)=>{
    var NewMobile=e.target.value
   setContact(NewMobile)
   const isVaildMobile= /^[7-9]{1}[0-9]{9}$/.test(NewMobile)
   setCheck(!isVaildMobile)
  }
  return (
    <div
      className="createaccountmaincontainer"
      style={{ backgroundColor: "#064469" }}
    >
      <p>
        <Link to="/">Shopzilla </Link>
      </p>
      <div className="Boxcontainer" style={{ backgroundColor: "white" }}>
        <div
          style={{
            fontFamily: " Arial,sans-serif",
            marginInline: "20px",
            marginTop: "14px",
            fontSize: "21px",
          }}
        >
          Create Account
        </div>
        <div className="label">
          Your name <br />
          <input type="text" onChange={(e) => setFullname(e.target.value)} />
        </div>
        <div className="labels">
          Mobile Number <br />
          <select
            name=""
            id=""
            onChange={(e) => setCountrycode(e.target.value)}
          >
            <option value="+91">+91</option>
          </select>
          <input
            type="number"
            required
            onChange={handleMobile}
           
          />
                 {!contact ? null : !check ? (
            <div style={{ color: "Green" }}>
              Thank you for providing your mobile number
            </div>
          ) : (
            <div style={{  color: "red" }}>
             Start with 7-9 and remaing 9 digit with 0-9
            </div>
          )}
        </div>
        <div className="label">
          Email <br />
          <input type="email" onChange={handleEmail} required />
          {!email ? null : !check ? (
            <div style={{ marginInline: "90px", color: "Green" }}>
              Strong Email
            </div>
          ) : (
            <div style={{ marginInline: "90px", color: "red" }}>
              Invaild Email
            </div>
          )}

        </div>
        <div className="label">
          Password <br />
          <input type="password" onChange={handlePassword} required />
          <br />
          <p>Passwords must be at least 6 characters.</p>
          {!password ? null : !check ? (
            <div style={{ marginInline: "90px", color: "Green" }}>
              Strong Password
            </div>
          ) : (
            <div style={{ marginInline: "90px", color: "red" }}>
              Weak Password
            </div>
          )}
        </div>
        <div className="label">
          <input
            type="file"
            onChange={(e) => setProfilepic(e.target.files[0])}
          />
        </div>
        <div className="label">
          <select
            name="District"
            className="districtdropdownstyle"
            id=""
            onChange={(e) => getplace(e.target.value)}
          >
            <option value="">Select District</option>
            {districtdata.map((row, key) => (
              <option value={row.district_id}>{row.district_name}</option>
            ))}
          </select>
          <select
            name="Place"
            id=""
            className="placedropdownstyle"
            onChange={(e) => setPlaceid(e.target.value)}
          >
            <option value="">Select Place</option>
            {placedata.map((row, key) => (
              <option value={row.place_id}>{row.place_name}</option>
            ))}
          </select>
        </div>
        <div className="label">
          <button onClick={buttonClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}
