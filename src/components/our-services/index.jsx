import React from "react";
import styles from "./our-services.module.css";
import branding from "../../assets/branding.png";
import CardSection from "../card-section";

function OurServices({ background = "#fff" }) {
  const cardData = [
    {
      subheading: "Experiential Solutions",
      // heading: "A Memory Forever",
      description: [
        "We create one-of-a-kind brand activations that immerse audiences in your brand story. From on-ground activations to multi-sensory experiences, we design moments that spark engagement and build emotional connections",
      ],
      link: "/services/experential-solutions",
    },
    {
      heading: "IP Servicing",
      // subheading: "From Idea to Reality",
      description: [
        "Have a great idea? Let’s make it a reality. We specialise in IP (Intellectual Property) development, execution, and monetisation, helping brands launch and scale proprietary experiences that become industry benchmarks",
      ],
      link: "/services/ip-servicing",
    },
    {
      subheading: "Content Labs",
      // subheading: "Capture Your Dreams",
      description: [
        "We don’t just create experiences—we capture them. With our in-house production team, we bring brand stories to life through high-quality video production, photography, digital storytelling, and branded content",
      ],
      link: "/services/content-labs",
    },
    {
      heading: "Sports Operations, Management & Servicing",
      // heading: "Passion, Precision, Performance",
      description: [
        "From sports event management to talent scouting and sponsorship activation, we offer end-to-end solutions that elevate the sports ecosystem and create unforgettable fan experiences",
      ],
      link: "/services/sports-management",
    },
    {
      heading: "Bespoke Experiences",
      // subheading: "Beyond the Ordinary",
      description: [
        "Looking for something truly unique? Our custom experiential marketing solutions are tailor-made to break the clutter, grab attention, and ignite curiosity. Let’s create something extraordinary together",
      ],
      link: "/services/bespoke",
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
        keepCardAsLinks={true}
      />
    </div>
  );
}

export default OurServices;
