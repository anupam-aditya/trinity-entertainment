import React from "react";
import styles from "./OurServicesHome.module.css";
import branding from "../../assets/branding.png";
import sports from "../../assets/sports.jpg";
import ipServicing from "../../assets/ip-servicing.JPG";
import contentLabs from "../../assets/content-labs.PNG";
import bespoke from "../../assets/bespoke.jpg";
import experiential from "../../assets/experiential.png";

function OurServicesHome() {
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
          className={`${styles.second} ${styles.subSection} ${styles.branding} ${styles.serviceCard}`}
          href="/services/experential-solutions"
          target="_blank"
          style={{ background: `url(${sports})` }}
        >
          <div className={styles.serviceCardContent}>
            <p className={styles.number}>
              Sports Operations, Management & Servicing
            </p>
            <p className={styles.heading}>Passion, Precision, Performance</p>
            <p className={styles.text}>
              We offer end-to-end sports management solutions, from talent
              tracking to event execution and sponsorship integration.
            </p>
          </div>
        </a>
        <div className={styles.rightSide}>
          <div className={styles.first}>
            <a
              className={`${styles.innerLeft} ${styles.subSection} ${styles.serviceCard}`}
              href="/services/ip-servicing"
              target="_blank"
              style={{ background: `url(${ipServicing})` }}
            >
              <div className={styles.serviceCardContent}>
                <p className={styles.number}>IP Servicing</p>
                <p className={styles.heading}>From Idea to Reality</p>
                <p className={styles.text}>
                  Have an idea? We bring it to life! Our in-house experts help you
                  conceptualise, develop, execute, and manage intellectual
                  properties (IPs), ensuring seamless execution and maximum
                  audience engagement.
                </p>
              </div>
            </a>
            <div className={styles.innerRight}>
              <a
                className={`${styles.subSection} ${styles.serviceCard}`}
                href="/services/content-labs"
                target="_blank"
                style={{ background: `url(${contentLabs})` }}
              >
                <div className={styles.serviceCardContent}>
                  <p className={styles.number}>Content Labs</p>
                  <p className={styles.heading}>Capture Your Dreams</p>
                  <p className={styles.text}>
                    From storyboarding to execution, our full-fledged production
                    house crafts compelling content that amplifies your brand's
                    storytelling.
                  </p>
                </div>
              </a>
              <a
                className={`${styles.subSection} ${styles.serviceCard}`}
                href="/services/experiential-solutions"
                target="_blank"
                style={{ background: `url(${experiential})` }}
              >
                <div className={styles.serviceCardContent}>
                  <p className={styles.number}>Experiential Solutions</p>
                  <p className={styles.heading}>A Memory Forever</p>
                  <p className={styles.text}>
                    We specialise in creating unique, immersive experiences that
                    deeply engage audiences and build brand loyalty.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <a
            className={`${styles.second} ${styles.subSection} ${styles.serviceCard}`}
            href="/services/bespoke"
            target="_blank"
            style={{ background: `url(${bespoke})` }}
          >
            <div className={styles.serviceCardContent}>
              <p className={styles.number}>Bespoke Experiences</p>
              <p className={styles.heading}>Beyond the Ordinary</p>
              <p className={styles.text}>
                Tired of generic, cookie-cutter marketing ideas? Our tailor-made
                experiential solutions are crafted to capture attention, spark
                curiosity, and create a buzz.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServicesHome;
