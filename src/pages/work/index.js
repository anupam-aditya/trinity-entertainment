import React from "react";
import styles from "./Work.module.css";

function WorkPage() {
  return (
    <section className={styles.workPageContainer}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={`${styles.item1} ${styles.item}`}></div>
          <div className={styles.nestedContainer}>
            <div className={`${styles.item1} ${styles.item}`}></div>
            <div className={`${styles.item1} ${styles.item}`}></div>
          </div>
          <div className={`${styles.item1} ${styles.item}`}></div>
        </div>
        <div className={styles.subContainer}>
          <div className={`${styles.nestedContainer} ${styles.flexColumn}`}>
            <div className={styles.item} style={{ height: "9rem" }}></div>
            <div className={styles.item} style={{ height: "9rem" }}></div>
            <div className={`${styles.item} ${styles.itemLong}`}></div>
          </div>
          <div className={`${styles.nestedContainer} ${styles.flexColumn}`}>
            <div
              className={styles.item}
              style={{
                color: "#000",
                fontSize: "6rem",
                fontWeight: 600,
                wordBreak: "break-word",
                textAlign: "center",
                verticalAlign: "middle",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                lineHeight: 1,
              }}
            >
              Our Work
            </div>
            <div className={styles.nestedItemContainer}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
            <div className={`${styles.item}`} style={{ flex: 1 }}></div>
          </div>
          <div className={`${styles.nestedContainer} ${styles.flexColumn}`}>
            <div className={styles.item} style={{ height: "9rem" }}></div>
            <div className={styles.item} style={{ height: "9rem" }}></div>
            <div className={`${styles.item} ${styles.itemLong}`}></div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.nestedContainer}>
            <div className={`${styles.item} ${styles.itemSmall}`}></div>
            <div className={`${styles.item} ${styles.itemLarge}`}></div>
          </div>
          <div className={styles.nestedContainer}>
            <div className={`${styles.item} ${styles.itemSmall}`}></div>
            <div className={`${styles.item} ${styles.itemLarge}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
