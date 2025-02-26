import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Carousel.module.css";

const Carousel = ({ items = [] }) => {
  const { scrollRef, goTo, activePageIndex } = useSnapCarousel();

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.carouselHeading}>
          What Our <span className={styles.highlight}>Clients</span> Say About
          Us <span className={styles.line}></span>
        </h2>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselWrapper} ref={scrollRef}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.carouselItem}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(102, 102, 102, 1) 0%, rgba(0, 0, 0, 0.85) 100%), url(${item.backgroundImg})`,
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className={styles.carouselImg}
              />
              <h3 className={styles.carouselTitle}>{item.title}</h3>
              <p className={styles.carouselText}>"{item.text}"</p>
            </div>
          ))}
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={styles.carouselButton}
            onClick={() => goTo(activePageIndex - 1)}
          >
            ←
          </button>
          <button
            className={styles.carouselButton}
            onClick={() => goTo(activePageIndex + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
