import React from "react";
import Rating from "./Rating";

export interface TestimonyProps {
  image: string;
  name: string;
  rating: number;
  review: string;
}

const Testimony: React.FC<TestimonyProps> = ({ image, name, rating, review }) => {
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
