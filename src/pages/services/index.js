import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import CardSection from "../../components/card-section";
import RowNavbar from "../../components/row-navbar";
import sunset from "../../assets/sunset.svg";
import sky from "../../assets/sky.svg";
import Highlight from "../../components/highlight";
import servicesHighlight from "../../assets/services-highlight.jpeg";

const Services = () => {
  const [navItems, setNavItems] = useState(null);
  const cardData = [
    {
      heading: "NYKAA",
      subheading: "IP Content",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
    {
      heading: "NYKAA",
      subheading: "IP Content",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
    {
      heading: "NYKAA",
      subheading: "IP Content",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
  ];
  const highlightData = {
    heading:
      "Clever ideas create memorable experiences, great ones make it unforgettable",
    subHeading: "",
    text: [
      "At Trinity, we are driven by our commitment to projects that resonate with our core values. Our initial focus is on forging a deep connection with your brand, as we believe that aligning with your ethos is key to reaching the right audience. We begin each partnership by immersing ourselves in understanding your brand's goals and services. From crafting strategic campaigns to seamless execution and effective marketing, we offer a complete and integrated approach to ensure your success",
    ],
    imageUrl: servicesHighlight,
  };
  const navItemsData = [
    {
      text: "Experential Solutions",
      img: sunset,
      href: "services/experential-solutions",
    },
    {
      text: "Ip Servicing and Management",
      img: sky,
      href: "services/ip-servicing-management",
    },
    { text: "Content Labs", img: sunset, href: "services/content-labs" },
    {
      text: "Sport Operation, Management & Servicing",
      img: sunset,
      href: "services/sports-management",
    },
    { text: "Bespoke", img: sunset, href: "services/bespoke" },
  ];
  const newHighlightData = {
    heading:
      "Clever ideas create memorable experiences, great ones make it unforgettable",
    subHeading: "",
    text: [
      "At Trinity, we are driven by our commitment to projects that resonate with our core values. Our initial focus is on forging a deep connection with your brand, as we believe that aligning with your ethos is key to reaching the right audience. We begin each partnership by immersing ourselves in understanding your brand's goals and services. From crafting strategic campaigns to seamless execution and effective marketing, we offer a complete and integrated approach to ensure your success",
    ],
    imageUrl: servicesHighlight,
  };
  useEffect(() => {
    setNavItems(navItemsData);
  }, []);

  return (
    <section className={styles.servicesMainSection}>
      <div className={styles.container}>
        <div className={styles.headingSection}>
          <p className={styles.servicesPageHeading}>
            Our <span>Services</span>
          </p>
          <p className={styles.servicesPageText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          </p>
          <p className={styles.line}></p>
        </div>
        {highlightData && (
          <div className={styles.servicesHighlightSection}>
            <Highlight data={highlightData} />
          </div>
        )}
        {navItems && (
          <div className={styles.rowNavSection}>
            <RowNavbar items={navItems} />
          </div>
        )}
        {newHighlightData && (
          <div className={styles.servicesHighlightSection}>
            <Highlight data={newHighlightData} />
          </div>
        )}
        {cardData && (
          <div className={styles.cardSection}>
            <p className={styles.cardHeading}>Trust Us Because</p>
            <CardSection data={cardData} />
          </div>
        )}
        {/* <div className={styles.cardContainer}></div> */}
      </div>
    </section>
  );
};

export default Services;
