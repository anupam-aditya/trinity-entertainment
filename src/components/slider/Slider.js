"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";

// Helper: Given a starting index and a count, compute the indices of the visible slides.
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
  // currentIndex represents the starting index of the current group.
  const [currentIndex, setCurrentIndex] = useState(0);
  // slidesToShow is computed dynamically based on the container's width.
  const [slidesToShow, setSlidesToShow] = useState(1);
  // previous active indices, used for animation.
  const [prevActiveIndices, setPrevActiveIndices] = useState(
    getActiveIndices(0, 1, items.length)
  );
  // Flag indicating whether an animation transition is in progress.
  const [isTransitioning, setIsTransitioning] = useState(false);
  // A ref to measure the container width.
  const slidesContainerRef = useRef(null);

  // Measure the available width and compute how many slides can fit.
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (!slidesContainerRef.current) return;
      const containerWidth = slidesContainerRef.current.clientWidth;
      let gapPx;
      const winWidth = window.innerWidth;
      if (winWidth <= 600) gapPx = 0.75 * 16; // 0.75rem = 12px
      else if (winWidth <= 1024) gapPx = 1.5 * 16; // 1.5rem = 24px
      else gapPx = 2.5 * 16; // 2.5rem = 40px

      // Each slide has a max width of 200px.
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

  // Whenever slidesToShow or currentIndex changes (and we're not in a transition),
  // update the previous active indices.
  useEffect(() => {
    if (!isTransitioning) {
      setPrevActiveIndices(
        getActiveIndices(currentIndex, slidesToShow, items.length)
      );
    }
  }, [slidesToShow, currentIndex, items.length, isTransitioning]);

  // Autoplay effect: automatically advance to the next slide if enabled.
  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, currentIndex, slidesToShow, items.length]);

  // When transitioning, after the animation completes (0.5s), update the previous active indices.
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

  // Advance one slide.
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Go back one slide.
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Jump directly to a specific slide.
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Compute the indices of slides that should currently be visible.
  const currentActiveIndices = getActiveIndices(
    currentIndex,
    slidesToShow,
    items.length
  );

  // During a transition, render the union of the previous and current active indices.
  let unionIndices = currentActiveIndices;
  if (isTransitioning) {
    const setUnion = new Set([...prevActiveIndices, ...currentActiveIndices]);
    unionIndices = Array.from(setUnion);
  }

  return (
    <div className={styles.container}>
      {/* Optional headings */}
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
          {/* Left navigation button */}
          {showNavigation && (
            <button
              onClick={prevSlide}
              className={`${styles.navigationButton} ${styles.prevButton}`}
              aria-label="Previous slide"
            >
              &lt;
            </button>
          )}

          {/* Slides container – note the ref for measuring width */}
          <div ref={slidesContainerRef} className={styles.slidesContainer}>
            {items.map((item, index) => {
              // Determine if this slide should be visible.
              const isVisible = unionIndices.includes(index);
              // Determine the animation class:
              // - slide-in for a slide newly visible.
              // - slide-out for a slide that is leaving.
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

          {/* Right navigation button */}
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

        {/* Dot navigation */}
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
