import React, { useState } from "react";
import styles from "./CardSection.module.css";

const CardSection = ({
  data = [],
  containerClass,
  gap,
  title,
  text = "",
  link = "",
  background = "#fff",
  hasImage = true,
  subheadingColor = "#000",
  subHeadingSize = "1rem",
  keepCardAsLinks = false,
}) => {
  // Slider state for mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setAnimationClass(styles.slideInFromRight);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAnimationClass("");
      }, 500); // Duration matches the CSS animation
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setAnimationClass(styles.slideInFromLeft);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setAnimationClass("");
      }, 500);
    }
  };

  // Render a single slider card for mobile view
  const renderSliderCard = (index) => {
    const item = data[index];
    const CardComponent = keepCardAsLinks && item?.link ? "a" : "div";
    const cardProps =
      keepCardAsLinks && item?.link
        ? {
            href: item?.link,
            className: styles.link,
            target: "_blank",
          }
        : {};

    return (
      <div className={`${styles.card} ${animationClass}`}>
        <CardComponent {...cardProps} className={styles.cardContentWrapper}>
          <div className={styles.cardImage}>
            {hasImage && <div className={styles.placeholder}></div>}
            {item?.heading && (
              <span
                className={styles.brand}
                style={{ position: hasImage ? "absolute" : "unset" }}
              >
                {item.heading}
              </span>
            )}
          </div>
          <div className={styles.cardContent}>
            <h3
              className={styles.cardTitle}
              style={{ color: subheadingColor, fontSize: subHeadingSize }}
            >
              {item.subheading}
            </h3>
            {item?.description?.length > 0 &&
              item.description.map((description, descIndex) => (
                <p key={descIndex} className={styles.cardDescription}>
                  {description}
                </p>
              ))}
          </div>
          <div className={styles.cardDivider}></div>
        </CardComponent>
      </div>
    );
  };

  // Render grid cards for desktop/tablet view
  const renderGridCard = (item, index) => {
    const CardComponent = keepCardAsLinks && item?.link ? "a" : "div";
    const cardProps =
      keepCardAsLinks && item?.link
        ? {
            href: item?.link,
            className: styles.link,
            target: "_blank",
          }
        : {};

    return (
      <div key={index} className={styles.gridCard}>
        <CardComponent {...cardProps} className={styles.cardContentWrapper}>
          <div className={styles.cardImage}>
            {hasImage && item?.image && <img src={item?.image} />}
            {item?.heading && (
              <span
                className={styles.brand}
                style={{ position: hasImage ? "absolute" : "unset" }}
              >
                {item.heading}
              </span>
            )}
          </div>
          <div className={styles.cardContent}>
            <h3
              className={styles.cardTitle}
              style={{ color: subheadingColor, fontSize: subHeadingSize }}
            >
              {item.subheading}
            </h3>
            {item?.description?.length > 0 &&
              item.description.map((description, descIndex) => (
                <p key={descIndex} className={styles.cardDescription}>
                  {description}
                </p>
              ))}
          </div>
          <div className={styles.cardDivider}></div>
        </CardComponent>
      </div>
    );
  };

  return (
    <div
      className={`${styles.container} ${containerClass}`}
      style={{ gap: gap, background: background }}
    >
      {title && <p className={styles.sectionHeading}>{title}</p>}
      {text && <p className={styles.sectionRegularText}>{text}</p>}
      {link && (
        <a className={styles.navigationLinks} href={link}>
          Explore More
        </a>
      )}

      {/* Desktop/Tablet Grid Layout */}
      <div className={styles.gridContainer}>
        {data.map((item, index) => renderGridCard(item, index))}
      </div>

      {/* Mobile Slider Layout */}
      <div className={styles.sliderContainer}>
        {data.length > 0 && renderSliderCard(currentIndex)}
        <div className={styles.buttonContainer}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={styles.navButton}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === data.length - 1}
            className={styles.navButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
