import React from "react";
import styles from "./OurServicesHome.module.css";
import branding from "../../assets/branding.png";

function OurServicesHome({}) {
  return (
    <div className={styles.ourServicesContainer}>
      <p className={styles.ourServicesHeading}>
        <span>
          Our <span className={styles.highlight}>Services</span>
        </span>
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
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0.83) 100%), url(${branding})`,
          }}
          href="/services/experential-solutions"
          target="_blank"
        >
          <p className={styles.number}>Experiential Solutions</p>
          <p className={styles.heading}>A Memory Forever</p>
          <p className={styles.text}>
            We specialise in creating unique, immersive experiences that deeply
            engage audiences and build brand loyalty. From live activations to
            interactive marketing campaigns, we ensure your message resonates
            and leaves a lasting impact
          </p>
        </a>
        <div className={styles.rightSide}>
          <div className={styles.first}>
            <a
              className={`${styles.innerLeft} ${styles.subSection}`}
              style={{
                background: `linear-gradient(180deg,rgba(0, 0, 0, 0.83) 0%,rgba(0, 0, 0, 0.83) 100%), url(${branding})`,
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
                audience engagement. Whether it’s event IPs, brand-led
                properties, or content-driven experiences, we make your vision a
                reality
              </p>
            </a>
            <div className={styles.innerRight}>
              <a
                className={`${styles.subSection}`}
                style={{
                  background: `linear-gradient(180deg,rgba(0, 0, 0, 0.83) 0%,rgba(0, 0, 0, 0.83) 100%), url(${branding})`,
                }}
                href="/services/content-labs"
                target="_blank"
              >
                <p className={styles.number}>Content Labs</p>
                <p className={styles.heading}>Capture Your Dreams</p>
                <p className={styles.text}>
                  From storyboarding to execution, our full-fledged production
                  house crafts compelling content that amplifies your brand’s
                  storytelling. Whether it’s brand films, event coverage, or
                  digital content, we deliver world-class visuals from script to
                  screen
                </p>
              </a>
              <a
                className={`${styles.subSection}`}
                style={{
                  background: `linear-gradient(180deg,rgba(0, 0, 0, 0.83) 0%,rgba(0, 0, 0, 0.83) 100%), url(${branding})`,
                }}
                href="/services/sports-management"
                target="_blank"
              >
                <p className={styles.number}>
                  Sports Operations, Management & Servicing
                </p>
                <p className={styles.heading}>
                  Passion, Precision, Performance
                </p>
                <p className={styles.text}>
                  We offer end-to-end sports management solutions, from talent
                  tracking to event execution and sponsorship integration. With
                  a focus on India’s 1.5 billion-strong sporting landscape, we
                  help unearth champions and enhance the sports ecosystem
                  through strategic collaborations and impactful engagements
                </p>
              </a>
            </div>
          </div>
          <a
            className={`${styles.second} ${styles.subSection}`}
            style={{
              background: `linear-gradient(180deg,rgba(0, 0, 0, 0.83) 0%,rgba(0, 0, 0, 0.83) 100%), url(${branding})`,
            }}
            href="/services/bespoke"
            target="_blank"
          >
            <p className={styles.number}>Bespoke Experiences</p>
            <p className={styles.heading}>Beyond the Ordinary</p>
            <p className={styles.text}>
              Tired of generic, cookie-cutter marketing ideas? Our tailor-made
              experiential solutions are crafted to capture attention, spark
              curiosity, and create a buzz. We design and execute custom
              campaigns that resonate with your brand ethos and audience,
              ensuring maximum impact
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServicesHome;
