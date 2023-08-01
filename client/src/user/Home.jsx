import React from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Home() {
  return (
    <div className="HomePage-Main">
      <div className="carousal-Home">
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showIndicators={false}>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f15b29daa9ad2ac1.jpg?q=20"
              alt="poster"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/122c7c65868dec69.jpg?q=20"
              alt="poster"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/50a78433b9c07bdd.jpg?q=20"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f6f77411de50722b.jpg?q=20"
              alt=""
            />
          </div>
        </Carousel>
      </div>


      <div className="box-PosterMain">
        <div className="boxPoster">
          <p>Keep Shopping for</p>
          <div className="boxPosterFirstRow">
            <img
              src="https://m.media-amazon.com/images/I/61N3sOIKthL._AC_SY120_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/71o1csyQILL._AC_SY120_.jpg"
              alt=""
            />
          </div>
          <div className="boxPosterFirstRowMobileName">
            <span>Nokia 5710 Express</span>
            <span>Samsung Galaxxy A34</span>
          </div>
          <div className="boxPosterFirstRowRate">
            <span className="Rate">₹4,899.00</span>
            <span className="Rate">₹30,999.00</span>
          </div>
          <div className="boxPosterSecondRow">
            <img
              src="https://m.media-amazon.com/images/I/51NUHkDaKQL._AC_SY120_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/61tmePx9zzL._AC_SY120_.jpg"
              alt=""
            />
          </div>
          <div className="boxPosterSecondRowMobileName">
            <span>Nokia 150(2020)Black</span>
            <span>Nokia 3310 Dual Sim</span>
          </div>
          <div className="boxPosterSecondRowRate">
            <span className="Rate">₹2,599.00</span>
            <span className="Rate">₹3,799.00</span>
          </div>
        </div>
        <div className="boxPoster">
          <p>Under ₹20,000.00</p>
          <img
            src="https://m.media-amazon.com/images/I/71S+S-vt1MS._AC_SY200_.jpg"
            style={{ paddingInline: "29px", paddingTop: "28px" }}
            alt=""
          />
          <p>
            HP 250 G8 Laptop 11th Gen Intel Core i3-1115G4/8GB DDR4 Ram / 512GB
            SSD/Windows 10
          </p>
          <div
            style={{
              color: "green",
              fontSize: "larger",
              textAlign: "center",
              paddingTop: "21px",
            }}
          >
            Shop Now
          </div>
        </div>
        <div className="boxPoster">
          <p>Under ₹599 | Combo packs | Shopzilla brands & more</p>
          <div className="boxPosterFirstRow">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
              alt=""
            />
          </div>
          <div className="boxPosterSecondRowRate">
            <span>Polo T-Shirts</span>
          </div>
          <div className="boxPosterSecondRow">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
              alt=""
            />
          </div>
          <div className="boxPosterSecondRowRate">
            <span>Shoes</span>
          </div>
        </div>
        <div className="boxPosterLast">
          <p>Today's deal</p>
          <div className="boxPosterFirstRowLast">
            <img
              src="https://m.media-amazon.com/images/I/71kfHC4ANJL._AC_SY135_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/71o1csyQILL._AC_SY120_.jpg"
              alt=""
            />
          </div>
          <div className="boxPosterFirstRowMobileName">
            <span>Samsung Galaxxy A54</span>
            <span>Samsung Galaxxy A34</span>
          </div>
          <div className="boxPosterFirstRowRate">
            <span className="Rate">₹40,899.00</span>
            <span className="Rate">₹30,999.00</span>
          </div>
          <div className="boxPosterSecondRow">
            <img
              src="https://m.media-amazon.com/images/I/419mtB4XijL._AC_SY135_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/61A8yM9nwtL._AC_SY135_.jpg"
              alt=""
            />
          </div>
          <div className="boxPosterSecondRowMobileName">
            <span>Samsung Galaxxy S21 FE 5G</span>
            <span>Samsung Galaxxy A73</span>
          </div>
          <div className="boxPosterSecondRowRate">
            <span className="Rate">₹33,925.00</span>
            <span className="Rate">₹39,799.00</span>
          </div>
        </div>
      </div>
     
      <div className="boxBannerLast">
        <p>
          More item to Consider <span>See more</span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "20px",
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/71S+S-vt1MS._AC_SY200_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/71V2Q8g87XL._AC_SY200_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/71b8lYXqorL._AC_SY200_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/71VB1UTcYkL._AC_SY200_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/41m8RHyc40S._AC_SY200_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
