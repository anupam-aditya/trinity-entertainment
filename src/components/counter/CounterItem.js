import React, { useState, useEffect } from "react";
import styles from "./Counter.module.css";

const CounterItem = ({ data, duration }) => {
  const { heading, subheading, text, number } = data;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof number !== "number") return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * number));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(number); // Ensure the final value is reached
      }
    };
    window.requestAnimationFrame(step);
  }, [number, duration]);

  return (
    <div className={styles.counterItem}>
      {typeof number === "number" && (
        <div className={styles.counterNumber}>{count}+</div>
      )}
      {heading && <h3>{heading}</h3>}
      {subheading && <h4>{subheading}</h4>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default CounterItem;
