import React from "react";
import Testimony from "./Testimonies/Testimony";

const Testimonies: React.FC = () => {
  const data = [
    {
      "image": "src/assets/images/avatar1.jpg",
      "name": "Ella DEUTRANCHE",
      "rating": 4,
      "review": "J'ai essayé plusieurs restaurants de hamburgers dans la région, mais celui-ci est de loin le meilleur. Les hamburgers sont énormes et savoureux et le service est excellent. Je reviendrai à coup sûr !"
    },
    {
      "image": "src/assets/images/avatar2.jpg",
      "name": "Lambert GOER",
      "rating": 3,
      "review": "Je suis un végétarien difficile à satisfaire, mais j'ai été très content de voir que ce restaurant avait des options végétariennes pour moi. J'ai commandé un hamburger végétarien et il était délicieux !"
    },
    {
      "image": "src/assets/images/avatar3.jpg",
      "name": "Eva DEVORET",
      "rating": 4,
      "review": "Je suis une habituée de ce restaurant depuis des années et je n'ai jamais été déçue. Les hamburgers sont toujours frais et délicieux et le personnel est sympathique et accueillant."
    },
    {
      "image": "src/assets/images/avatar4.jpg",
      "name": "Jean REVEU",
      "rating": 5,
      "review": "J'ai été agréablement surpris par la qualité des hamburgers dans ce restaurant. Ils utilisent des ingrédients frais et les hamburgers sont cuits à la perfection. Je recommande fortement ce restaurant à tous les amateurs de hamburgers !"
    }
  ];

  return (
    <section className="testimony">
      <h2>Nos clients témoignent</h2>
      <div className="content">
        {data.map((item, index) => (
          <Testimony key={index} {...item} />
        ))}
      </div>
    </section>
  )
};

export default Testimonies;
