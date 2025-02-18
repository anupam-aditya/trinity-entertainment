import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
  title,
  children,
  onClose,
  background = "#fff",
  color = "#000",
}) => {
  return (
    <div className={styles.modal}>
      <article
        className={styles["modal-container"]}
        style={{ background: background, color: color }}
      >
        <header className={styles["modal-container-header"]}>
          <span className={styles["modal-container-title"]}>{title}</span>
          <button className={styles["icon-button"]} onClick={onClose}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                fill="var(--icon-fill-color)"
              />
            </svg>
          </button>
        </header>
        <section className={`${styles["modal-container-body"]} ${styles.rtf}`}>
          {children}
        </section>
      </article>
    </div>
  );
};

export default Modal;
