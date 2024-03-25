// Movie.js
import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

function MovieComponent({ title, synopsis, rating, image }) {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="movie">
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-image-container">
          <img src={image} alt={title} className="movie-image" />
        </div>
        <p className="movie-synopsis">{synopsis}</p>
        <p className="movie-rating">Rating: {rating}</p>
      </div>
      <div className="review-section">
        <h3 className="review-section-title">Reviews</h3>
        <ReviewList reviews={reviews} />
        <h3 className="review-section-title">Add a Review</h3>
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
}

export default MovieComponent;
