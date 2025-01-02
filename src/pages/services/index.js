import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.servicesMainSection}>
      <div className={styles.headingContainer}>
        <p className={styles.servicesPageHeading}>
          Our <span>Services</span>
        </p>
        <p className={styles.servicesPageText}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        </p>
      </div>
      <div className={styles.cardContainer}></div>
    </section>
  );
};

export default Services;
