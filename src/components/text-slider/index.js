"use client";

import React, { useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./TextSlider.module.css";

export default function TextSlider({
  title,
  titleAlignment = "left",
  showNavigation = true,
  showButtons = false,
  items,
  subHeading = "",
  text = "",
  cardStyle,
  sliderContainerStyle,
  carouselWrapperStyle,
  headingStyle,
  subHeadingStyle,
  textStyle,
}) {
  const { scrollRef, pages, activePageIndex, prev, next, goTo } =
    useSnapCarousel();
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
          <h2 className={`${headingStyle}`}>{title}</h2>
        </div>
      )}
      {subHeading && (
        <div
          className={`${styles.heading} ${styles[titleAlignment]} ${subHeadingStyle}`}
        >
          <p className={`${subHeadingStyle}`}>{subHeading}</p>
        </div>
      )}
      {text && (
        <div
          className={`${styles.heading} ${styles[titleAlignment]} ${textStyle}`}
        >
          <p className={`${textStyle}`}>{text}</p>
        </div>
      )}
      <div className={styles.sliderComponent}>
        <div className={`${styles.sliderContainer} ${sliderContainerStyle}`}>
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

          <div
            ref={scrollRef}
            className={`${styles.carouselWrapper} ${carouselWrapperStyle}`}
          >
            {/* <div className={styles.carouselInner}> */}
            {items.map((item) => (
              <div key={item.id} className={`${styles.card} ${cardStyle}`}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cartText}>{item.text}</p>
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
