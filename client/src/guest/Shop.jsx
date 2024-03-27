import React, { useEffect, useState } from "react";
import Displaylogo from "./assets/displaylogo.gif";
import axios from "axios";
import "./App.css";
export default function Shop() {
  const [districtdata, setDistrictdata] = useState([]);
  const [placedata, setPlacedata] = useState([]);
  const [placeid, setPlaceid] = useState("");
  const [shopname, setShopname] = useState("");
  const [countrycode, setCountrycode] = useState("+91");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState("");
  const [proof, setProof] = useState("");
  const [address, setAddress] = useState("");

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
  const getplace = (getid) => {
    axios
      .get("http://localhost:4777/Place/" + getid)
      .then((response) => response.data)
      .then((data) => {
        setPlacedata(data.place);
      });
  };
  const buttonClick = () => {
    const frm = new FormData();
    frm.append("shopname", shopname);
    frm.append("countrycode", countrycode);
    frm.append("contact", contact);
    frm.append("email", email);
    frm.append("password", password);
    frm.append("logo", logo);
    frm.append("proof", proof);
    frm.append("address", address);
    frm.append("placeid", placeid);
    axios.post("http://localhost:4777/Shop", frm).then((response) => {
      if (response.data.message === "Data Saved") {
        window.location.reload();
      } else {
        alert("Failed");
      }
    });
  };
  return (
    <div className="Main-Container">
      <div className="box_containershop">
        <div className="left-sidebox">
          <div>
            <img
              src={Displaylogo}
              style={{ width: "630px", height: "670px" }}
              alt=""
            />
          </div>
        </div>

        <div className="right-sidebox">
          <div style={{ marginTop: "17px" }}>
            <span style={{ marginInline: "22px", color: "white" }}>
              Shop Name
            </span>
            <span>
              <input
                type="text"
                className="shopstyle"
                onChange={(e) => setShopname(e.target.value)}
              />
            </span>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "22px", color: "white" }}>
              Contact
            </span>
            <br />
            <span>
              <select
                name=""
                className="countrycodestyle"
                id=""
                onChange={(e) => setCountrycode(e.target.value)}
              >
                <option value="+91">+91</option>
              </select>
              <input
                type="text"
                className="mobilenumberstyle"
                onChange={(e) => setContact(e.target.value)}
              />
            </span>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "22px", color: "white" }}>Email </span>
            <br />
            <input
              type="text"
              className="shopstyle"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "22px", color: "white" }}>
              Password{" "}
            </span>
            <br />
            <input
              type="password"
              className="shopstyle"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "5px" }}>
            <span style={{ marginInline: "90px", color: "white" }}>Logo </span>
            <br />
            <input
              type="file"
              style={{ marginInline: "64px", color: "white" }}
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "90px", color: "white" }}>Proof </span>
            <br />
            <input
              type="file"
              style={{ marginInline: "64px", color: "white" }}
              onChange={(e) => setProof(e.target.files[0])}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <button className="shopbuttonstyle" onClick={buttonClick}>
              Submit
            </button>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "28px", color: "white" }}>
              District{" "}
            </span>
            <br />
            <select
              name=""
              id=""
              className="selectstyle"
              onChange={(e) => getplace(e.target.value)}
            >
              <option value="">Select District</option>
              {districtdata.map((row, key) => (
                <option value={row.district_id}>{row.district_name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "28px", color: "white" }}>Place </span>
            <br />
            <select
              name=""
              id=""
              className="selectstyle"
              onChange={(e) => setPlaceid(e.target.value)}
            >
              <option value="">Select Place</option>
              {placedata.map((row, key) => (
                <option value={row.place_id}>{row.place_name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span style={{ marginInline: "22px", color: "white" }}>
              Address
            </span>
            <br />
            <textarea
              name=""
              id=""
              className="textareastyle"
              cols="30"
              rows="10"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
