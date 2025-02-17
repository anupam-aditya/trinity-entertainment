import React from "react";
import styles from "./our-services.module.css";
import branding from "../../assets/branding.png";
import CardSection from "../card-section";

function OurServices({ background = "#fff" }) {
  const cardData = [
    {
      subheading: "Experiential Solutions",
      heading: "A Memory Forever",
      description:
        "We specialise in creating unique, immersive experiences that deeply engage audiences and build brand loyalty. From live activations to interactive marketing campaigns, we ensure your message resonates and leaves a lasting impact",
    },
    {
      heading: "IP Servicing",
      subheading: "From Idea to Reality",
      description:
        "Have an idea? We bring it to life! Our in-house experts help you conceptualise, develop, execute, and manage intellectual properties (IPs), ensuring seamless execution and maximum audience engagement. Whether it’s event IPs, brand-led properties, or content-driven experiences, we make your vision a reality",
    },
    {
      heading: "Content Labs",
      subheading: "Capture Your Dreams",
      description:
        "From storyboarding to execution, our full-fledged production house crafts compelling content that amplifies your brand’s storytelling. Whether it’s brand films, event coverage, or digital content, we deliver world-class visuals from script to screen",
    },
    {
      subheading: "Sports Operations, Management & Servicing",
      heading: "Passion, Precision, Performance",
      description:
        "We offer end-to-end sports management solutions, from talent tracking to event execution and sponsorship integration. With a focus on India’s 1.5 billion-strong sporting landscape, we help unearth champions and enhance the sports ecosystem through strategic collaborations and impactful engagements",
    },
    {
      heading: "Bespoke Experiences",
      subheading: "Beyond the Ordinary",
      description:
        "Tired of generic, cookie-cutter marketing ideas? Our tailor-made experiential solutions are crafted to capture attention, spark curiosity, and create a buzz. We design and execute custom campaigns that resonate with your brand ethos and audience, ensuring maximum impact",
    },
  ];
  return (
    <div
      className={styles.ourServicesContainer}
      style={{ background: background }}
    >
      <p className={styles.ourServicesHeading}>
        Our <span className={styles.highlight}>Services</span>
        <span className={styles.line} />
      </p>
      <CardSection
        text="Explore our wide range of event and marketing solutions designed to create authentic connections and lasting impressions"
        title="Turning Ideas into Experiences"
        data={cardData}
        containerClass={styles.cardContainerClass}
      />
    </div>
  );
}

export default OurServices;
