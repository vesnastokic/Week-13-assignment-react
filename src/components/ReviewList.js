import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => {
        console.log("some review?!", review, "index:", index);

        return (
          <Review
            key={index}
            reviewer={review.reviewer}
            comment={review.comment}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
