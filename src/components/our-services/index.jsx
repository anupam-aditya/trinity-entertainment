import React from "react";
import styles from "./our-services.module.css";
import branding from "../../assets/branding.png";

function OurServices() {
  return (
    <div className={styles.ourServicesContainer}>
      <p className={styles.ourServicesHeading}>
        Our <span className={styles.highlight}>Services</span>
        <span className={styles.line} />
      </p>
      <div className={styles.servicesSection}>
        <div
          className={`${styles.second} ${styles.subSection} ${styles.branding}`}
          style={{
            background: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 62%,
    rgba(0, 0, 0, 0.53) 100%
  ), url(${branding})`,
          }}
        >
          <p className={styles.number}>05.</p>
          <p className={styles.heading}> Automotive Marketing</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.first}>
            <div
              className={`${styles.innerLeft} ${styles.subSection}`}
              style={{
                background: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 62%,
    rgba(0, 0, 0, 0.53) 100%
  ), url(${branding})`,
              }}
            >
              <p className={styles.number}>02.</p>
              <p className={styles.heading}> Automotive Marketing</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className={styles.innerRight}>
              <div
                className={`${styles.subSection}`}
                style={{
                  background: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 62%,
    rgba(0, 0, 0, 0.53) 100%
  ), url(${branding})`,
                }}
              >
                <p className={styles.number}>03.</p>
                <p className={styles.heading}>Creative Services</p>
              </div>
              <div
                className={`${styles.subSection}`}
                style={{
                  background: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 62%,
    rgba(0, 0, 0, 0.53) 100%
  ), url(${branding})`,
                }}
              >
                <p className={styles.number}>05.</p>
                <p className={styles.heading}> Automotive Marketing</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.second} ${styles.subSection}`}
            style={{
              background: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 62%,
    rgba(0, 0, 0, 0.53) 100%
  ), url(${branding})`,
            }}
          >
            <p className={styles.number}>05.</p>
            <p className={styles.heading}> Automotive Marketing</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div
            className={`${styles.second} ${styles.subSection} ${styles.third}`}
            style={{
              background: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 62%,
    rgba(0, 0, 0, 0.53) 100%
  ), url(${branding})`,
            }}
          >
            <p className={styles.number}>06.</p>
            <p className={styles.heading}> Entertainment Marketing</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
