import React, { useMemo } from "react";
import SuggestItem, { SuggestItemProps } from "./Suggests/SuggestItem";
import useFetch from "../../../services/useFetch";
import { shuffle } from "../../../utils/shuffle";
import type { Product } from "../../../types/product";

export interface Suggestion {
  product: Product
  description: string
  date: string
}

const Suggests: React.FC = () => {
  const { data } = useFetch<Array<Suggestion>>("http://kazaburger.e-mingo.net/api/suggest");

  const suggestions = useMemo(() => {
    if (!data) return [];

    // We shuffle a copy to get random suggestions.
    const copy = [...data];
    shuffle(copy);

    return copy.slice(0, 3).map((item) => ({
      image: item.product.pictures[0] || "/notfound.jpg",
      imageAlt: item.product.family,
      title: item.product.title,
      description: item.description,
      price: item.product.price
    } satisfies SuggestItemProps));
  }, [data]);

  return (
    <section className="suggests">
      <h2>Nos suggestions</h2>

      <div className="content">
        {suggestions.map((item, index) => (
          <SuggestItem key={index} {...item} />
        ))}
      </div>
    </section>
  )
};

export default Suggests;
