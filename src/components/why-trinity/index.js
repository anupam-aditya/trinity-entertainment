import React from "react";
import styles from "./WhyTrinity.module.css";

const FeatureCard = ({ title, desc, style }) => {
  return (
    <div className={styles.card} style={style}>
      <span className={styles.checkmark}>✔</span>
      {title && <h2 className={styles.cardTitle}>{title}</h2>}
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
};

const WhyChooseTrinity = ({ features = [], title = "" }) => {
  return (
    <section className={styles.trinitySection}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <div className={styles.cardsContainer}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature?.title}
            desc={feature?.desc}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseTrinity;
