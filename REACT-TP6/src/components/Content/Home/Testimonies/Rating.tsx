import React from "react";

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <i key={i} className={`fa-solid fa-star ${i < rating ? "text-secondary" : ""}`}></i>
    );
  }

  return (
    <span>
      {stars}
    </span>
  )
};

export default Rating;
