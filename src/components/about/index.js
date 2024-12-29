import React from "react";
import styles from "./About.module.css";
import aboutf from "../../assets/about-1.png";
import abouts from "../../assets/about-2.png";

function About() {
  return (
    <section className={styles.aboutUsContainer}>
      <div className={styles.container}>
        <div className={styles.headingSide}>
          <p className={styles.heading}>
            <span className={styles.highlight}>About</span> Us
          </p>
          <img className={styles.image} src={aboutf} />
        </div>
        <div className={styles.textSide}>
          <img className={styles.image} src={abouts} />
          <p className={styles.regularText}>
            Lorem ipsum dolor sit amet, consectetur{" "}
            <span className={styles.highlight}>adipiscing elit. Integer</span>{" "}
            nec odio. Praesent libero. Sed cursus ante dapibus{" "}
            <span className={styles.highlight}>diam. Sed</span> nisi.
          </p>
          <a className={styles.redirectText} href="/about-us">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
