import React from "react";
import styles from "./ServicesNavigation.module.css";

const ServicesNavigation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Our Services</h1>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <a
            href="/services/experiential-solutions"
            className={styles.serviceHeading}
          >
            Experiential Solutions
          </a>
          <p className={styles.serviceDescription}>
            We create one-of-a-kind brand activations that immerse audiences in
            your brand story. From on-ground activations to multi-sensory
            experiences, we design moments that spark engagement and build
            emotional connections
          </p>
        </div>
        <div className={styles.serviceCard}>
          <a
            href="/services/ip-servicing-management"
            className={styles.serviceHeading}
          >
            IP Servicing & Management
          </a>
          <p className={styles.serviceDescription}>
            Have a great idea? Let’s make it a reality. We specialise in IP
            (Intellectual Property) development, execution, and monetisation,
            helping brands launch and scale proprietary experiences that become
            industry benchmarks
          </p>
        </div>
        <div className={styles.serviceCard}>
          <a href="/services/content-labs" className={styles.serviceHeading}>
            Content Labs
          </a>
          <p className={styles.serviceDescription}>
            We don’t just create experiences—we capture them. With our in-house
            production team, we bring brand stories to life through high-quality
            video production, photography, digital storytelling, and branded
            content
          </p>
        </div>
        <div className={styles.serviceCard}>
          <a
            href="/services/sports-management"
            className={styles.serviceHeading}
          >
            Sports Operations, Management & Servicing
          </a>
          <p className={styles.serviceDescription}>
            From sports event management to talent scouting and sponsorship
            activation, we offer end-to-end solutions that elevate the sports
            ecosystem and create unforgettable fan experiences
          </p>
        </div>
        <div className={styles.serviceCard}>
          <a
            href="/services/bespoke-activities"
            className={styles.serviceHeading}
          >
            Bespoke Activities
          </a>
          <p className={styles.serviceDescription}>
            Looking for something truly unique? Our custom experiential
            marketing solutions are tailor-made to break the clutter, grab
            attention, and ignite curiosity. Let’s create something
            extraordinary together
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesNavigation;
