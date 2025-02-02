import React from "react";
import styles from "./FeatureList.module.css";

const FeatureList = ({ titles, columns = 2 }) => {
  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamic columns
      }}
    >
      {titles.map((title, index) => (
        <div key={index} className={styles.title}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
