import React from "react";
import Rating from "./Rating";

const Testimony: React.FC<{
  image: string;
  name: string;
  rating: number;
  review: string;
}> = ({ image, name, rating, review }) => {
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <Rating rating={rating} />
      <div>{review}</div>
    </div>
  );
};

export default Testimony;
