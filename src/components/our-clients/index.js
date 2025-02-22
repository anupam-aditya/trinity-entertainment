import React from "react";
import styles from "./OurClients.module.css";

const OurClients = ({
  title = "Our Clients",
  subHeading = "Trusted by some of the biggest global brands",
  data = [],
}) => {
  // Duplicate logos for seamless infinite looping
  const doubledLogos = [...data, ...data, ...data];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{title}</h2>
        {subHeading && <p className={styles.subheading}>{subHeading}</p>}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {doubledLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Client Logo"
                className={styles.logo}
              />
            ))}
          </div>
        </div>
        <a href="/clients" className={styles.viewAllButton}>
          View All Clients
        </a>
      </div>
    </section>
  );
};

export default OurClients;
