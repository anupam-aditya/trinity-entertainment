import React from "react";
import styles from "./MissionVisionSection.module.css";
import teamImage from "../../assets/work-8.jpg";

const MissionVisionSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mission}>
        <h2 className={styles.heading}>Our Mission</h2>
        <p className={styles.paragraph}>
          At Trinity Entertainment, our mission is simple yet powerful:
        </p>
        <p className={styles.intro}>
          “To connect people with brands through authentic, immersive
          experiences”
        </p>
        <p className={styles.paragraph}>
          We challenge conventional marketing norms to bring inclusivity,
          authenticity, and creativity to every project. Our goal is to tell
          compelling brand stories that resonate with audiences on an emotional
          level
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
        <h2 className={styles.heading}>Our Vision</h2>
        <p className={styles.intro}>
          “To craft or catalyse an experience for every soul—at least once”
        </p>
        <p className={styles.paragraph}>
          We believe in impact-driven marketing, ensuring that every brand
          experience is memorable, meaningful, and measurable
        </p>
      </div>
    </section>
  );
};

export default MissionVisionSection;
