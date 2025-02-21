import React from "react";

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fa-solid fa-star ${i < rating ? "text-secondary" : ""}`}></i>
      ))}
    </span>
  )
};

export default Rating;
