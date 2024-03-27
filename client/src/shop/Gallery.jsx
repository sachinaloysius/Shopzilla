import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Gallery() {
  const productid = useParams("id");
  const [shopgallery, setShopgallery] = useState("");
  const [imageOut, setImageOut] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);
  const getGallery = () => {
    axios
      .get(`http://localhost:4777/Gallery/${productid.id}`)
      .then((response) => response.data)
      .then((data) => {
        setImageOut(data.gallery);
      });
  };

  const buttonClick = () => {
    const frm = new FormData();
    frm.append("shopgallery", shopgallery);
    frm.append("productid", productid.id);
    axios.post("http://localhost:4777/Gallery", frm).then((response) => {
      if (response.data.message === "Data Saved") {
        window.location.reload();
      } else {
        alert("Failed");
      }
    });
  };
 
  const buttonDelete=(delid)=>{
    console.log(delid);
  axios.delete("http://localhost:4777/Gallery/" +delid)
  .then((response)=>response.data)
  .then((data)=>{
    getGallery()
  })
  }
  return (
    <div className="GalleryMain">
      Gallery
      <div>
        <input
          type="file"
          onChange={(e) => setShopgallery(e.target.files[0])}
        />
        <button onClick={buttonClick}>Upload</button>
      </div>
      <table>
        <tr>
          <td>Srl.no</td>
          <td>Product Images</td>
          <td>Action</td>
        </tr>

        {imageOut.map((row, key) => (
          <tr>
            <td>{key+1}</td>
            <td>
              <img src={row.gallery_image} width="120px" height="100px" alt="" />
            </td>
            <td><button onClick={()=>buttonDelete(row.gallery_id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
