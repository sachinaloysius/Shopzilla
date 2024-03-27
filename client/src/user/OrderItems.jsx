import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Review from "./Review";
import axios from "axios";

export default function OrderItems({ row }) {
  const uid  = sessionStorage.getItem('uid');
  const { product_name, product_image, product_price, product_id } = row;
  const [reviewmodelOpen, setReviewmodelOpen] = React.useState(false);
  const [checkreview, setCheckreview] = useState([]);
  const [reviewcheck, setReviewcheck] = useState(true);
  useEffect(() => {
    const reviewbuttondisable = () => {
      var dat = {
        product_id: product_id,
        uid: uid,
      };
      console.log(dat);
      axios.post("http://localhost:4777/FeedbackGet", dat).then((response) => {
        console.log(response);
        if (response.data.message === "True") {
          setCheckreview(true);
        } else if (response.data.message === "False") {
          setReviewcheck(false);
        }
      });
    };
    reviewbuttondisable();
  }, []);

  function openReview() {
    setReviewmodelOpen(true);
  }
  const customStyles = {
    content: {
      width: "fit-content",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  function closeReview() {
    setReviewmodelOpen(false);
  }

  return (
    <div className="orderItemMainContainer">
      <div className="Order_ContainerItem">
        <div>
          <img src={product_image} width="80px" alt="" />
        </div>
        <div style={{ fontSize: "large" ,width:"250px"}}>{product_name}</div>
        <div>
          <div className="rate_design">{product_price}</div>
          <div>
            {row.cart_status === 1 ? (
              <> Your order has been placed</>
            ) : row.cart_status === 2 ? (
              <>Packed</>
            ) : row.cart_status === 3 ? (
              <>Dispatched</>
            ) : row.cart_status === 4 ? (
              <>Shiped</>
            ) : (
              <>
                {" "}
                Your item has been delivered
                {reviewcheck ? (
                  ""
                ) : (
                  <button onClick={openReview}>/ Review this product</button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        style={customStyles}
        isOpen={reviewmodelOpen}
        onRequestClose={closeReview}
        contentLabel="Example Modal"
      >
        <button className="closeButton" onClick={closeReview}>
          X
        </button>
        <Review pid={product_id} />
      </Modal>
    </div>
  );
}
