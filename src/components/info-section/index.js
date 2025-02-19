import React from "react";
import styles from "./InfoSection.module.css";
import Counter from "../counter";

const InfoSection = ({ counterData, background = "#fff" }) => {
  return (
    <section
      className={styles.trinitySection}
      style={{ background: background }}
    >
      {/* Who We Are Section */}
      <div className={`${styles.subsection} ${styles.whoWeAre}`}>
        <h2>Who We Are</h2>
        <p>
          We are a dynamic team that lives and breathes creativity. Step into
          our workspace, and you’ll find us:
        </p>
        <ul>
          <li>Brainstorming fresh marketing trends</li>
          <li>Exploring emerging markets</li>
          <li>Pushing boundaries with bold strategies</li>
          <li>Experimenting with courage because we thrive on challenges</li>
        </ul>
        <p>
          At Trinity, we don’t believe in the ordinary—we create extraordinary
        </p>
      </div>

      {/* By The Numbers Section */}
      <div className={`${styles.subsection} ${styles.byTheNumbers}`}>
        <h2>By The Numbers</h2>
        <Counter data={counterData} duration={8000} />
      </div>

      {/* Our Approach Section */}
      <div className={`${styles.subsection} ${styles.ourApproach}`}>
        <h2>Our Approach</h2>
        <p>
          We seamlessly integrate into any stage of your event planning and
          brand marketing process. Whether you need:
        </p>
        <ul>
          <li>Event Strategy &amp; Conceptualisation</li>
          <li>Program Development</li>
          <li>On-Site Execution &amp; Management</li>
        </ul>
        <p>
          We’re here to elevate your brand experiences and create a seamless
          consumer journey that drives engagement and brand loyalty.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
