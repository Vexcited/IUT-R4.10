import React, { useMemo } from "react";
import Testimony, { TestimonyProps } from "./Testimonies/Testimony";
import useFetch from "../../../services/useFetch";
import type { Product } from "../../../types/product";

export interface Testimony {
  product: Product
  rating: number
  review: string
  user: string
  date: string
}

const Testimonies: React.FC = () => {
  const { data } = useFetch<Array<Testimony>>("http://kazaburger.e-mingo.net/api/testimony");

  const testimonies = useMemo(() => {
    if (!data) return [];

    return data.slice(0, 4).map((item, key) => ({
      // We use `k` here to make sure the browser doesn't cache the 3 others
      // and reuse the same image for all of them.
      image: "https://i.pravatar.cc/300?k=" + key,
      name: item.user,
      rating: item.rating,
      review: item.review
    } satisfies TestimonyProps));
  }, [data]);

  return (
    <section className="testimony">
      <h2>Nos clients témoignent</h2>
      <div className="content">
        {testimonies.map((item, index) => (
          <Testimony key={index} {...item} />
        ))}
      </div>
    </section>
  )
};

export default Testimonies;
