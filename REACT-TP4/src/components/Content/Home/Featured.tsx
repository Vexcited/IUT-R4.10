import React from "react";

const Featured: React.FC = () => {
  return (
    <section className="featured">
      {/* <!-- text--> */}
      <div className="content">
        <h1 className="text-white">Le 2025</h1>
        <p className="price">9,90 €</p>
        <p>
          <a href="#" className="btn-lg">
            Commander
          </a>
        </p>
      </div>
      {/* <!-- image--> */}
      <div className="picture">
        <img src="src/assets/images/rapido-burger.png" alt="le 2025" />
      </div>
    </section>
  )
};

export default Featured;
