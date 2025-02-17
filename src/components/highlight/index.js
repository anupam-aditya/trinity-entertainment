import React from "react";
import styles from "./Highlight.module.css";

const Highlight = ({
  data,
  imagePosition = "right",
  stackOnSmallScreens = true,
  containerClass,
}) => {
  return (
    <div
      className={`${containerClass} ${styles.container} ${
        stackOnSmallScreens ? styles.stackOnSmall : ""
      } ${imagePosition === "left" ? styles.imageLeft : styles.imageRight}`}
    >
      <div className={styles.textContainer}>
        {data?.heading && <h1 className={styles.heading}>{data?.heading}</h1>}
        {data?.subHeading && (
          <p className={styles.subHeading}>{data?.subHeading}</p>
        )}
        {data?.text?.length > 0 &&
          data?.text?.map((text, index) => (
            <p
              className={`${styles.text} ${
                index !== data?.text?.length - 1 ? "" : styles.noMargin
              }`}
            >
              {text}
            </p>
          ))}
        {data?.link?.href && data?.link?.text && (
          <a className={styles.link} href={data?.link?.href}>
            {data?.link?.text}
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
