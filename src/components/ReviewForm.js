import React, { useState } from "react";
import "./ReviewForm.css"; // Import CSS file for ReviewForm component

const ReviewForm = ({ onSubmit }) => {
  const [reviewer, setReviewer] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewer || !comment || !rating) return;
    onSubmit({ reviewer, comment, rating });
    setReviewer("");
    setComment("");
    setRating(0);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={reviewer}
        onChange={(e) => setReviewer(e.target.value)}
      />
      <textarea
        placeholder="Write your review here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
