"use client";

import React, { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Carousel.module.css";

export default function Carousel({
  items = [],
  autoPlay = false,
  autoPlayInterval = 3000,
  showButtons = false,
}) {
  const { scrollRef, pages, next, goTo, activePageIndex } = useSnapCarousel();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    if (!items?.length) return;
    const itemsLength = items?.length;
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % itemsLength);
      goTo((activeIndex + 1) % itemsLength);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <div ref={scrollRef} className={styles.sliderComponent}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              activeIndex !== index ? styles.noDisplay : ""
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
        {showButtons && (
          <div className={styles.dotsSection}>
            {pages.map((i, index) => {
              return (
                <div
                  className={`${styles.dots} ${
                    activePageIndex === index ? styles.activeDot : ""
                  }`}
                  onClick={() => goTo(index)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
