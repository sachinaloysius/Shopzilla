import React, { useState } from "react";
import './Review.css'
import axios from "axios";

function Review({pid}) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const productId = pid;

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));  
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const uid=window.sessionStorage.getItem('uid')
    var dat={
      productid:productId,
       userid:uid,
       reviewcontent:feedback,
       ratingcount:rating
     }
     if(rating==="" || feedback==="" ){
      alert("Please fill out this fields and submit")
     }
     else{
        axios
     .post("http://localhost:4777/Feedback" , dat)
      .then((response)=>{
        if(response.data.message==="Data Saved"){
          alert("Data Saved")
          window.location.reload()
        }
        else{
          alert('Failed')
        }
      })
     }
   
    }


  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="rating">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={handleRatingChange}
              />
              <span className={ratingValue <= rating ? "checked" : ""}>
                &#9733;
              </span>
            </label>
          );
        })}
      </div>
      <div>
       
         <div>
            <textarea
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange}
        required
      />
         </div>
    
      </div>
    
      <button type="submit" onClick={handleSubmit}>Submit Review</button>
    </form>
  );
}

export default Review;