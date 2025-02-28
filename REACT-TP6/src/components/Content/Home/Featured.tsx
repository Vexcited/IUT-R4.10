import React, { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../../../services/useFetch";
import type { Product } from "../../../types/product";

export interface FeaturedProduct {
  product: Product
  family: string
  date: string
}

const Featured: React.FC = () => {
  const { data } = useFetch<Array<FeaturedProduct>>("http://kazaburger.e-mingo.net/api/featured");
  const section = useRef<HTMLElement>(null);
  const timer = useRef<number | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    if (!data) return;
    setCurrentIndex((currentIndex + 1) % data.length);
  }, [data, currentIndex]);

  const prevSlide = () => {
    if (!data) return;
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  const slideOver = () => {
    setIsPlaying(false);
  };

  const slideOut = () => {
    setIsPlaying(true);
  };

  const updateSlide = useCallback((index: number) => {
    if (!data || !section.current) return;
    section.current.style.backgroundImage = `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${data[index].product.pictures[0]})`;
  }, [data]);

  useEffect(() => {
    if (!data) return;
    updateSlide(currentIndex);
  }, [data, currentIndex, updateSlide]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, 5_000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    }
  }, [isPlaying, nextSlide])

  return (
    <section ref={section} className="featured" onMouseEnter={slideOver} onMouseLeave={slideOut}>
      <div className="slide">
        <button type="button" className="prev" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="content">
          <h1 className="text-white">{data?.[currentIndex].product.title}</h1>
          <p className="price">{data?.[currentIndex].product.price} €</p>
          <p>
            <a href="#" className="btn-lg">
              Commander
            </a>
          </p>
        </div>
        <button type="button" className="next" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
};

export default Featured;
