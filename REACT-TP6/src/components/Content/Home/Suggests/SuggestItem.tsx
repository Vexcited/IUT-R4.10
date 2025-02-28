import React from "react";

export interface SuggestItemProps {
  image: string
  imageAlt: string
  title: string
  description: string
  price: string
}

const SuggestItem: React.FC<SuggestItemProps> = ({ image, imageAlt, title, description, price }) => {
  return (
    <div>
      <img src={image} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">{price} €</span>
    </div>
  );
};

export default SuggestItem;
