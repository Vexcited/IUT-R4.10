import React from "react";
import SuggestItem from "./Suggests/SuggestItem";

const Suggests: React.FC = () => {
  const data = [
    {
      image: "src/assets/images/classic-burger.jpg",
      imageAlt: "Classic burger",
      title: "Classic burger",
      description: "Le classic Burger est un délicieux sandwich à base d'un pain brioché moelleux et doré à point, qui renferme un savoureux steak haché de bœuf grillé à la perfection. Il est parfait pour les petites faims.",
      price: "6.90 €",
    },
    {
      image: "src/assets/images/kingdom-burger.jpg",
      imageAlt: "kingdom burger",
      title: "Kingdom burger",
      description: "Le Kingdom Burger est un délicieux sandwich à base d'un pain brioché moelleux et doré à point, qui renferme deux savoureux steaks hachés de bœuf grillé à la perfection. Il est parfait pour les gourmands !",
      price: "7.90 €",
    },
    {
      image: "src/assets/images/supreme-burger.jpg",
      imageAlt: "supreme burger",
      title: "Suprême burger",
      description: "Le Suprême Burger est un délicieux sandwich à base d'un pain brioché moelleux et doré à point, qui renferme un savoureux steak haché avec des rondelles de tomates et du cheddar.",
      price: "9.90 €",
    }
  ];

  return (
    <section className="suggests">
      <h2>Nos suggestions</h2>

      <div className="content">
        {data.map((item, index) => (
          <SuggestItem key={index} {...item} />
        ))}
      </div>
    </section>
  )
};

export default Suggests;
