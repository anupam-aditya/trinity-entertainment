import React from "react";
import styles from "./RowNavbar.module.css";

function RowNavbar({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <a
          className={styles.rowNavbarItem}
          style={{
            backgroundImage: `linear-gradient(rgba(102, 102, 102, 0.53) 0%, rgba(0, 0, 0, 0.53) 100%), url(${item?.img})`,
          }}
          href={item?.href}
        >
          {item?.text}
        </a>
      ))}
    </div>
  );
}

export default RowNavbar;
