import React from "react";
import styles from "./OurClients.module.css";
import eema from "../../assets/eema.png";
import bni from "../../assets/bni.png";
import marriot from "../../assets/marriot.png";
import porsche from "../../assets/porsche.png";

const logos = [eema, bni, marriot, porsche];

const OurClients = () => {
  // Duplicate logos for seamless infinite looping
  const doubledLogos = [...logos, ...logos];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Clients</h2>
        <p className={styles.subheading}>
          Trusted by some of the biggest global brands
        </p>
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
