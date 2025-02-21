import React from "react";
import Featured from "./Home/Featured";
import Suggests from "./Home/Suggests";
import KazaNews from "./Home/KazaNews";
import Testimonies from "./Home/Testimonies";

const Home: React.FC = () => {
  return (
    <section className="content">
      <Featured />
      <Suggests />
      <KazaNews />
      <Testimonies />
    </section>
  )
};

export default Home;
