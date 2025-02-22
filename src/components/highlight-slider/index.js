import React, { useEffect, useRef } from "react";
import styles from "./HighlightSlider.module.css";
import Carousel from "../image-carousel";

function HighlightSlider({
  imagesArray = [],
  title = "",
  subHeading = "",
  text = [],
  autoPlayInterval = 3000,
  link = {},
}) {
  return (
    <div className={styles.container}>
      {(title || subHeading || text) && (
        <div className={styles.textSection}>
          {title && (
            <div className={styles.sectionHeading}>
              <p className={styles.headingText}>{title}</p>
            </div>
          )}
          {subHeading && (
            <div className={styles.sectionSubHeading}>
              <p className={styles.subHeadingText}>{subHeading}</p>
            </div>
          )}
          {text && text?.length > 0 && (
            <div className={styles.sectionRegularText}>
              {text.map((item, index) => (
                <p
                  className={`${styles.regularText} ${
                    index !== 0 ? styles.textSpacing : ""
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
          {link?.href && link?.text && (
            <a className={styles.link} href={link?.href} target="_blank">
              {link?.text}
            </a>
          )}
        </div>
      )}
      {imagesArray && (
        <div className={styles.sliderSection}>
          <Carousel
            autoPlay={true}
            items={imagesArray}
            showNavigation={false}
            autoPlayInterval={autoPlayInterval}
          />
        </div>
      )}
    </div>
  );
}

export default HighlightSlider;
