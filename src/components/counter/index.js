import React from "react";
import CounterItem from "./CounterItem";
import styles from "./Counter.module.css";

const Counter = ({ data, duration = 2000 }) => {
  return (
    <div className={styles.counterContainer}>
      {data.map((item, index) => (
        <CounterItem key={index} data={item} duration={duration} />
      ))}
    </div>
  );
};

export default Counter;
