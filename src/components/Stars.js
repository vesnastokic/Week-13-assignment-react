
import React from 'react';

const Stars = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5].map((star, index) => (
    <span key={index} className={star <= rating ? 'filled' : 'empty'}>
      ★
    </span>
  ));

  return <div className="stars">{stars}</div>;
};

export default Stars;
