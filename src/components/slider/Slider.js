"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";

function getActiveIndices(startIndex, slidesToShow, total) {
  const indices = [];
  for (let i = 0; i < slidesToShow; i++) {
    indices.push((startIndex + i) % total);
  }
  return indices;
}

export default function Slider({
  title,
  titleAlignment = "left",
  autoPlay = true,
  autoPlayInterval = 3000,
  showNavigation = true,
  showDots = true,
  items,
  subHeading,
  text,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [prevActiveIndices, setPrevActiveIndices] = useState(
    getActiveIndices(0, 1, items.length)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesContainerRef = useRef(null);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (!slidesContainerRef.current) return;
      const containerWidth = slidesContainerRef.current.clientWidth;
      let gapPx;
      const winWidth = window.innerWidth;
      if (winWidth <= 600) gapPx = 0.75 * 16;
      else if (winWidth <= 1024) gapPx = 1.5 * 16;
      else gapPx = 2.5 * 16;

      const effectiveSlideWidth = 200 + gapPx;
      let newSlidesToShow = Math.floor(containerWidth / effectiveSlideWidth);
      if (newSlidesToShow < 1) newSlidesToShow = 1;
      if (newSlidesToShow > items.length) newSlidesToShow = items.length;
      setSlidesToShow(newSlidesToShow + 1);
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [items.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setPrevActiveIndices(
        getActiveIndices(currentIndex, slidesToShow, items.length)
      );
    }
  }, [slidesToShow, currentIndex, items.length, isTransitioning]);

  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, currentIndex, slidesToShow, items.length]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setPrevActiveIndices(
          getActiveIndices(currentIndex, slidesToShow, items.length)
        );
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning, slidesToShow, items.length]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const currentActiveIndices = getActiveIndices(
    currentIndex,
    slidesToShow,
    items.length
  );

  let unionIndices = currentActiveIndices;
  if (isTransitioning) {
    const setUnion = new Set([...prevActiveIndices, ...currentActiveIndices]);
    unionIndices = Array.from(setUnion);
  }

  return (
    <div className={styles.container}>
      {title && (
        <div className={`${styles.heading} ${styles[titleAlignment]}`}>
          <h2>{title}</h2>
        </div>
      )}
      {subHeading && (
        <div className={`${styles.subHeading} ${styles[titleAlignment]}`}>
          <h3>{subHeading}</h3>
        </div>
      )}
      {text && (
        <div className={`${styles.text} ${styles[titleAlignment]}`}>
          <p>{text}</p>
        </div>
      )}

      <div className={styles.sliderComponent}>
        <div className={styles.sliderContainer}>
          {showNavigation && (
            <button
              onClick={prevSlide}
              className={`${styles.navigationButton} ${styles.prevButton}`}
              aria-label="Previous slide"
            >
              &lt;
            </button>
          )}

          <div ref={slidesContainerRef} className={styles.slidesContainer}>
            {items.map((item, index) => {
              const isVisible = unionIndices.includes(index);
              let animationClass = "";
              if (isTransitioning) {
                if (
                  currentActiveIndices.includes(index) &&
                  !prevActiveIndices.includes(index)
                ) {
                  animationClass = styles["slide-in"];
                } else if (
                  prevActiveIndices.includes(index) &&
                  !currentActiveIndices.includes(index)
                ) {
                  animationClass = styles["slide-out"];
                }
              }
              return (
                <div
                  key={item.id}
                  className={`${styles.slide} ${
                    isVisible ? styles.active : ""
                  } ${animationClass}`}
                >
                  <div className={styles.card}>
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
                      {item?.title && item?.cta && (
                        <div className={styles.cardContent}>
                          {item?.title && (
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                          )}
                          {item?.cta && (
                            <a
                              href={item.cta.href}
                              className={styles.ctaButton}
                            >
                              {item.cta.label}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showNavigation && (
            <button
              onClick={nextSlide}
              className={`${styles.navigationButton} ${styles.nextButton}`}
              aria-label="Next slide"
            >
              &gt;
            </button>
          )}
        </div>

        {showDots && (
          <div className={styles.dotsSection}>
            {items.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  currentIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
