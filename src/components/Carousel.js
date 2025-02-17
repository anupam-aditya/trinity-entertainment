import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Carousel.module.css";

const Carousel = ({ items = [] }) => {
  const { scrollRef, goTo, activePageIndex } = useSnapCarousel();

  // const items = [
  //   {
  //     id: 1,
  //     title: "Client 1",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     img: brandImage,
  //     backgroundImg: backgroundImage,
  //   },
  //   {
  //     id: 2,
  //     title: "Client 2",
  //     text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  //     img: brandImage,
  //     backgroundImg: backgroundImage,
  //   },
  //   {
  //     id: 3,
  //     title: "Client 3",
  //     text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
  //     img: brandImage,
  //     backgroundImg: backgroundImage,
  //   },
  //   {
  //     id: 4,
  //     title: "Client 4",
  //     text: "Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit.",
  //     img: brandImage,
  //     backgroundImg: backgroundImage,
  //   },
  // ];

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselHeading}>What Our</h2>
      <h2 className={styles.carouselHeading}>
        <p>
          <span className={styles.highlight}>Clients</span> Say About Us
        </p>
        <span className={styles.line}></span>
      </h2>
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
