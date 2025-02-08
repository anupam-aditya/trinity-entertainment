"use client";

import React, { useEffect } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Carousel.module.css";

export default function Carousel({
  items = [],
  autoPlay = false,
  autoPlayInterval = 3000,
}) {
  const { scrollRef, next, goTo, activePageIndex } = useSnapCarousel();

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      goTo((activePageIndex + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      if (activePageIndex !== items.length - 1) goTo(activePageIndex + 1);
      else goTo(0);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [activePageIndex]);

  return (
    <div className={styles.container}>
      <div ref={scrollRef} className={styles.sliderComponent}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              activePageIndex !== index ? styles.noDisplay : ""
            }`}
          >
            {item?.image && (
              <div className={`${styles.imageContainer}`}>
                <img
                  src={item.image}
                  alt={item?.title || ""}
                  className={styles.image}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
