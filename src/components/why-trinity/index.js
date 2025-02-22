import React from "react";
import styles from "./WhyTrinity.module.css";

const FeatureCard = ({ title, desc, style }) => {
  return (
    <div className={styles.card} style={style}>
      <span className={styles.checkmark}>✔</span>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
};

const WhyChooseTrinity = () => {
  const features = [
    {
      title: "Global Expertise",
      desc: "We create experiences that resonate worldwide, blending local insights with international trends",
    },
    {
      title: "End-to-End Solutions",
      desc: "From ideation to execution, we handle every aspect of your event, brand activation, or campaign",
    },
    {
      title: "Creative & Data-Driven",
      desc: "We merge innovation with analytics to ensure your brand experiences drive real engagement",
    },
    {
      title: "Proven Track Record",
      desc: "With 1000+ successful events and a portfolio of award-winning campaigns, we deliver nothing but the best",
    },
  ];

  return (
    <section className={styles.trinitySection}>
      <h1 className={styles.sectionTitle}>Why Choose Trinity Entertainment?</h1>
      <div className={styles.cardsContainer}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            desc={feature.desc}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseTrinity;
