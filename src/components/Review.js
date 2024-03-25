import React from 'react';

const Review = ({ reviewer, comment }) => {
  return (
    <div className="review">
      <h3>{reviewer}</h3>
      <div>{comment}</div>
    </div>
  );
};

export default Review;
