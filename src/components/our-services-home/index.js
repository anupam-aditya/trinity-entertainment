import React from "react";
import styles from "./OurServicesHome.module.css";
import branding from "../../assets/branding.png";
import sports from "../../assets/sports.jpg";
import ipServicing from "../../assets/ip-servicing.JPG";
import contentLabs from "../../assets/content-labs.PNG";
import bespoke from "../../assets/bespoke.jpg";
import experiential from "../../assets/experiential.png";

function OurServicesHome({}) {
  return (
    <div className={styles.ourServicesContainer}>
      <p className={styles.ourServicesHeading}>
        Our <span className={styles.highlight}>Services</span>
        <span className={styles.line} />
      </p>
      <p className={styles.ourServicesSubHeading}>
        Turning Ideas into Experiences
      </p>
      <p className={styles.ourServicesText}>
        Explore our wide range of event and marketing solutions designed to
        create authentic connections and lasting impressions
      </p>
      <div className={styles.servicesSection}>
        <a
          className={`${styles.second} ${styles.subSection} ${styles.branding}`}
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%), url(${sports})`,
          }}
          href="/services/experential-solutions"
          target="_blank"
        >
          <p className={styles.number}>
            Sports Operations, Management & Servicing
          </p>
          <p className={styles.heading}>Passion, Precision, Performance</p>
          <p className={styles.text}>
            We offer end-to-end sports management solutions, from talent
            tracking to event execution and sponsorship integration.
          </p>
        </a>
        <div className={styles.rightSide}>
          <div className={styles.first}>
            <a
              className={`${styles.innerLeft} ${styles.subSection}`}
              style={{
                background: `linear-gradient(180deg,rgba(0, 0, 0, 0.63) 0%,rgba(0, 0, 0, 0.63) 100%), url(${ipServicing})`,
              }}
              href="/services/ip-servicing"
              target="_blank"
            >
              <p className={styles.number}>IP Servicing</p>
              <p className={styles.heading}>From Idea to Reality</p>
              <p className={styles.text}>
                Have an idea? We bring it to life! Our in-house experts help you
                conceptualise, develop, execute, and manage intellectual
                properties (IPs), ensuring seamless execution and maximum
                audience engagement.
              </p>
            </a>
            <div className={styles.innerRight}>
              <a
                className={`${styles.subSection}`}
                style={{
                  background: `linear-gradient(180deg,rgba(0, 0, 0, 0.63) 0%,rgba(0, 0, 0, 0.63) 100%), url(${contentLabs})`,
                }}
                href="/services/content-labs"
                target="_blank"
              >
                <p className={styles.number}>Content Labs</p>
                <p className={styles.heading}>Capture Your Dreams</p>
                <p className={styles.text}>
                  From storyboarding to execution, our full-fledged production
                  house crafts compelling content that amplifies your brand’s
                  storytelling.
                </p>
              </a>
              <a
                className={`${styles.subSection}`}
                style={{
                  background: `linear-gradient(180deg,rgba(0, 0, 0, 0.63) 0%,rgba(0, 0, 0, 0.63) 100%), url(${experiential})`,
                }}
                href="/services/experiential-solutions"
                target="_blank"
              >
                <p className={styles.number}>Experiential Solutions</p>
                <p className={styles.heading}>A Memory Forever</p>
                <p className={styles.text}>
                  We specialise in creating unique, immersive experiences that
                  deeply engage audiences and build brand loyalty.
                </p>
              </a>
            </div>
          </div>
          <a
            className={`${styles.second} ${styles.subSection}`}
            style={{
              background: `linear-gradient(180deg,rgba(0, 0, 0, 0.63) 0%,rgba(0, 0, 0, 0.63) 100%), url(${bespoke})`,
            }}
            href="/services/bespoke"
            target="_blank"
          >
            <p className={styles.number}>Bespoke Experiences</p>
            <p className={styles.heading}>Beyond the Ordinary</p>
            <p className={styles.text}>
              Tired of generic, cookie-cutter marketing ideas? Our tailor-made
              experiential solutions are crafted to capture attention, spark
              curiosity, and create a buzz.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServicesHome;
