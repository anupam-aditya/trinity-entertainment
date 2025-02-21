import React from "react";
import styles from "./MissionVisionSection.module.css";
import teamImage from "../../assets/work-8.jpg";

const MissionVisionSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mission}>
        <h2 className={styles.heading}>Mission</h2>
        <p className={styles.intro}>
          Our mission is to connect people with the promises of brands through
          experiential marketing.
        </p>
        <p className={styles.paragraph}>
          At Trinity, we thrive on the languages of values and branding. Our
          purpose is to question and challenge conventional marketing norms,
          ensuring inclusivity and authenticity. We meet people where they are,
          honor our clients’ visions, and tell compelling stories through
          creative, truthful, and intentional means.
        </p>
        <ul className={styles.bulletList}>
          <li className={styles.bulletItem}>
            <span className={styles.icon}>📍</span> We meet consumers where they
            are
          </li>
          <li className={styles.bulletItem}>
            <span className={styles.icon}>💡</span> We honour our clients’
            visions
          </li>
          <li className={styles.bulletItem}>
            <span className={styles.icon}>🎨</span> We create with intention,
            passion, and precision
          </li>
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={teamImage}
          alt="Trinity Entertainment Team"
          className={styles.teamImage}
        />
      </div>
      <div className={styles.vision}>
        <h2 className={styles.heading}>Vision</h2>
        <p className={styles.paragraph}>
          We believe in impact-driven marketing, ensuring that every brand
          experience is memorable, meaningful, and measurable.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionSection;
