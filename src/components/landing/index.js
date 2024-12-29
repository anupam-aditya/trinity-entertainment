import React from "react";
import styles from "./LandingSection.module.css";

const LandingSection = () => {
  return (
    <section className={styles.landingContainer}>
      <div className={styles.container}>
        {/* <video className={styles.videoBackground} autoPlay muted loop playsInline>
        <source src="../../assets/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <button className={styles.startButton}>START</button>
          </div>

          <h1 className={styles.heading}>LOREM</h1>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
