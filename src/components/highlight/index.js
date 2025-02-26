import React from "react";
import styles from "./Highlight.module.css";
import SvgWrapper from "../common/svgWrapper/svgWrapper";

const Highlight = ({
  data,
  imagePosition = "right",
  stackOnSmallScreens = true,
  containerClass,
  headingSize = "2.5rem",
  headingWeight = 700,
  headingColor = "#000",
  subHeadingSize = "1.875rem",
  subHeadingWeight = 600,
  subHeadingColor = "#000",
  textSize = "1rem",
  textWeight = 400,
  textColor = "#555",
  showSeparation = false,
}) => {
  return (
    <div
      className={`${containerClass} ${styles.container} ${
        stackOnSmallScreens ? styles.stackOnSmall : ""
      } ${imagePosition === "left" ? styles.imageLeft : styles.imageRight}`}
    >
      <div className={styles.textContainer}>
        {data?.heading && (
          <h1
            className={styles.heading}
            style={{
              //   fontSize: headingSize,
              //   fontWeight: headingWeight,
              color: headingColor,
            }}
          >
            {data?.heading}
          </h1>
        )}
        {data?.subHeading && (
          <p
            className={styles.subHeading}
            style={{
              // fontSize: subHeadingSize,
              fontWeight: subHeadingWeight,
              color: subHeadingColor,
            }}
          >
            {data?.subHeading}
          </p>
        )}
        {showSeparation && <hr className={styles.separation} />}
        {data?.text?.length > 0 &&
          data?.text?.map((text, index) => (
            <p
              className={`${styles.text} ${
                index !== data?.text?.length - 1 ? "" : styles.noMargin
              }`}
              style={{
                fontSize: textSize,
                fontWeight: textWeight,
                color: textColor,
              }}
            >
              {text}
            </p>
          ))}
        {data?.link?.href && data?.link?.text && (
          <a className={styles.link} href={data?.link?.href} target="_blank">
            {data?.link?.text} <SvgWrapper fill="#ef4158" svgSrc="arrowPink" />
          </a>
        )}
      </div>
      {data?.imageUrl && (
        <div className={styles.imageContainer}>
          <img
            src={data?.imageUrl}
            alt={data?.imageAlt}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default Highlight;
