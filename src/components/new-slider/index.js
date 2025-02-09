"use client";

import React, { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./slider.module.css";

export default function NewSlider({
  title = "",
  titleAlignment = "left",
  showNavigation = true,
  showButtons = false,
  items = [],
  subHeading = "",
  text = "",
  autoPlay = false,
  autoPlayInterval = 3000,
}) {
  const { scrollRef, pages, activePageIndex, prev, next, goTo } =
    useSnapCarousel();

  useEffect(() => {
    if (!autoPlay) return; // Do nothing if autoplay is not enabled.

    const intervalId = setInterval(() => {
      next();
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, next]);
  const prevSlide = () => {
    prev();
  };

  const nextSlide = () => {
    next();
  };

  return (
    <div className={styles.container}>
      {title && (
        <div className={`${styles.heading} ${styles[titleAlignment]}`}>
          <h2>{title}</h2>
        </div>
      )}
      {subHeading && (
        <div className={`${styles.heading} ${styles[titleAlignment]}`}>
          <h2>{subHeading}</h2>
        </div>
      )}
      {text && (
        <div className={`${styles.heading} ${styles[titleAlignment]}`}>
          <h2>{text}</h2>
        </div>
      )}
      <div className={styles.sliderComponent}>
        <div className={styles.sliderContainer}>
          {showNavigation && (
            <button
              onClick={prevSlide}
              disabled={activePageIndex === 0}
              className={`${styles.navigationButton} ${styles.prevButton}`}
              aria-label="Previous slide"
            >
              &lt;
            </button>
          )}

          <div ref={scrollRef} className={styles.carouselWrapper}>
            {/* <div className={styles.carouselInner}> */}
            {items.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardInner}>
                  {item?.image && (
                    <div className={styles.imageContainer}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.image}
                      />
                    </div>
                  )}
                  {(item?.title || item?.cta) && (
                    <div className={styles.cardContent}>
                      {item?.title && (
                        <h3 className={styles.cardTitle}>{item?.title}</h3>
                      )}
                      {item.cta && (
                        <a href={item.cta.href} className={styles.ctaButton}>
                          {item.cta.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>

          {showNavigation && (
            <button
              onClick={nextSlide}
              disabled={activePageIndex === pages.length - 1}
              className={`${styles.navigationButton} ${styles.nextButton}`}
              aria-label="Next slide"
            >
              &gt;
            </button>
          )}
        </div>
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
