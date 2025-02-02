import React from "react";
import styles from "./Highlight.module.css";

const Highlight = ({
  data,
  imagePosition = "right", // Options: 'left', 'right'
  stackOnSmallScreens = true, // Stacks image and text on small screens by default
}) => {
  return (
    <div
      className={`${styles.container} ${
        stackOnSmallScreens ? styles.stackOnSmall : ""
      } ${imagePosition === "left" ? styles.imageLeft : styles.imageRight}`}
    >
      <div className={styles.textContainer}>
        {data?.heading && <h1 className={styles.heading}>{data?.heading}</h1>}
        {data?.subHeading && (
          <p className={styles.subHeading}>{data?.subHeading}</p>
        )}
        {data?.text?.length > 0 &&
          data?.text?.map((text) => <p className={styles.text}>{text}</p>)}
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
