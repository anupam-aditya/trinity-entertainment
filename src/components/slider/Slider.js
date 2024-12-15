import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import marriot from "../../assets/marriot.png";
import bni from "../../assets/bni.png";
import eema from "../../assets/eema.png";
import para from "../../assets/para.png";
import styles from "./Slider.module.css";

const Slider = () => {
  const { scrollRef, goTo, pages, activePageIndex, next, prev } =
    useSnapCarousel();

  const items = [
    {
      id: 1,
      img: eema,
    },
    {
      id: 2,
      img: bni,
    },
    {
      id: 3,
      img: marriot,
    },
    {
      id: 4,
      img: para,
    },
    {
      id: 5,
      img: eema,
    },
    {
      id: 6,
      img: bni,
    },
    {
      id: 7,
      img: marriot,
    },
    {
      id: 8,
      img: para,
    },
    {
      id: 9,
      img: eema,
    },
    {
      id: 10,
      img: bni,
    },
    {
      id: 11,
      img: marriot,
    },
    {
      id: 12,
      img: para,
    },
    {
      id: 13,
      img: eema,
    },
    {
      id: 14,
      img: bni,
    },
    {
      id: 15,
      img: marriot,
    },
    {
      id: 16,
      img: para,
    },
  ];
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeadingSection}>
        <p className={styles.sliderHeading}>
          Our <span className={styles.highlight}>Partners</span>
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderWrapper}>
          <div className={styles.prevButton} onClick={() => prev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.636166 7.50084L12.9277 13.5017L16 12.0018L5.24466 6.75086L16 1.49996L12.9277 0L0.636166 6.00088C0.228829 6.19981 0 6.46958 0 6.75086C0 7.03214 0.228829 7.30191 0.636166 7.50084Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.sliderContent} ref={scrollRef}>
            {items.map((item) => {
              return (
                <div className={styles.sliderItem} key={item?.id}>
                  <img src={item?.img} className={styles.sliderImage} />
                </div>
              );
            })}
          </div>
          <div className={styles.nextButton} onClick={() => next()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3638 8.32701L3.07233 14.3279L0 12.8279L10.7553 7.57703L0 2.32613L3.07233 0.826172L15.3638 6.82706C15.7712 7.02598 16 7.29575 16 7.57703C16 7.85832 15.7712 8.12808 15.3638 8.32701Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Slider;
