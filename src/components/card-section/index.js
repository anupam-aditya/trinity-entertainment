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
  background = "#fff",
  hasImage = true,
  subheadingColor = "#000",
  subHeadingSize = "1rem",
  keepCardAsLinks = false,
}) => {
  return (
    <div
      className={`${styles.container} ${containerClass}`}
      style={{ gap: gap, background: background }}
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
        {data.map((item, index) => {
          const CardComponent = keepCardAsLinks && item.link ? "a" : "div";
          const cardProps =
            keepCardAsLinks && item.link
              ? {
                  href: item.link,
                  className: `${styles.card} ${styles.link}`,
                  target: "_blank",
                }
              : { className: styles.card };

          return (
            <CardComponent key={index} {...cardProps}>
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
                  item?.description?.map((description, descIndex) => (
                    <p key={descIndex} className={styles.cardDescription}>
                      {description}
                    </p>
                  ))}
              </div>
              <div className={styles.cardDivider}></div>
            </CardComponent>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
