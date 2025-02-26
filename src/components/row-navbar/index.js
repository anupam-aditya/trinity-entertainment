import React from "react";
import styles from "./RowNavbar.module.css";

function RowNavbar({ items }) {
  return (
    <div className={styles.container}>
      {items?.map((item) => (
        <a
          className={styles.rowNavbarItem}
          style={{
            backgroundImage: `linear-gradient(rgba(102, 102, 102,0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url(${item?.img})`,
            backgroundSize: "cover",
          }}
          href={item?.href}
        >
          {item?.text}
          {item?.description && (
            <span className={styles.text}>{item?.description}</span>
          )}
        </a>
      ))}
    </div>
  );
}

export default RowNavbar;
