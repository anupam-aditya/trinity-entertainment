import React from "react";
import styles from "./ServicesSection.module.css";

const ServicesSection = ({ services }) => {
  return (
    <section className={styles.sportsEventServices}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.mainHeading}>{services?.heading}</h2>
        <p className={styles.tagline}>{services?.tagline}</p>
        <div className={styles.servicesGrid}>
          {services?.data?.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceName}>{service.name}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
