import React from "react";
import styles from "./CardSection.module.css";

const CardSection = ({
  data = [],
  laptopCards = 3,
  tabletCards = 2,
  mobileCards = 1,
  containerClass,
  gap,
  title,
  text = "",
  link = "",
}) => {
  return (
    <div
      className={`${styles.container} ${containerClass}`}
      style={{ gap: gap }}
    >
      {title && <p className={styles.sectionHeading}>{title}</p>}
      {text && <p className={styles.sectionRegularText}>{text}</p>}
      {link && <a className={styles.navigationLinks}>Explore More</a>}
      <div
        className={styles.cardGrid}
        style={{
          "--laptop-cards": laptopCards,
          "--tablet-cards": tabletCards,
          "--mobile-cards": mobileCards,
        }}
      >
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              {/* Placeholder for image */}
              <div className={styles.placeholder}></div>
              <span className={styles.brand}>{item.heading}</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.subheading}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
            <div className={styles.cardDivider}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
