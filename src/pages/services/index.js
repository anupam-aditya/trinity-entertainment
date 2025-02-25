import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import CardSection from "../../components/card-section";
import RowNavbar from "../../components/row-navbar";
import sunset from "../../assets/sunset.svg";
import sky from "../../assets/sky.svg";
import Highlight from "../../components/highlight";
import servicesHighlight from "../../assets/services-highlight.jpeg";
import ServicesNavigation from "../../components/services-navigation";
import MarketingSymphony from "../../components/marketing-symphony";
import OurServices from "../../components/our-services";

const Services = () => {
  const [navItems, setNavItems] = useState(null);
  const cardData = [
    {
      heading: "NYKAA",
      subheading: "IP Content",
      description: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
      ],
    },
    {
      heading: "NYKAA",
      subheading: "IP Content",
      description: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
      ],
    },
    {
      heading: "NYKAA",
      subheading: "IP Content",
      description: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
      ],
    },
  ];
  const highlightData = {
    heading:
      "Clever Ideas Create Memorable Experiences, Great Ones Make Them Unforgettable",
    subHeading: "Crafting Experiences That Resonate",
    text: [
      "At Trinity Entertainment, we don’t just create marketing campaigns—we craft immersive brand experiences that connect, engage, and leave a lasting impact",
      "Our approach is simple yet powerful: We start with your brand, understand your goals, and build campaigns that seamlessly integrate strategy, creativity, and execution",
      "✓ We dive deep into your brand ethos to ensure alignment with your core values",
      "✓ We design strategic campaigns that connect with the right audience",
      "✓ We execute seamlessly, leveraging marketing, technology, and innovation",
      "The result? Authentic brand interactions that drive engagement, loyalty, and success",
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
    <div className={styles.servicesPage}>
      <div className={styles.servicesHeroSection}>
        <div className={styles.servicesHeroContainer}>
          <div className={styles.headingSection}>
            <p className={styles.servicesPageHeading}>
              Our <span>Services</span>
            </p>
            <p className={styles.servicesPageText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet,
            </p>
            <p className={styles.line}></p>
          </div>
        </div>
      </div>
      {highlightData && (
        <div className={styles.servicesHighlightSection}>
          <Highlight
            containerClass={styles.highlightContainer}
            data={highlightData}
            headingSize="2.4rem"
            headingColor="#ef3e58"
            subHeadingColor="#566e78"
            showSeparation="true"
          />
        </div>
      )}
      <div className={styles.servicesNavigationSection}>
        <OurServices />
      </div>
      <div className={styles.marketingSection}>
        <MarketingSymphony />
      </div>
      {/* {navItems && (
        <div className={styles.rowNavSection}>
          <RowNavbar items={navItems} />
        </div>
      )} */}
      {/* {newHighlightData && (
        <div className={styles.servicesHighlightSection}>
          <Highlight
            data={newHighlightData}
            containerClass={styles.highlightContainer}
          />
        </div>
      )} */}
      {/* {cardData && (
        <div className={styles.cardSection}>
          <CardSection
            containerClass={styles.cardContainer}
            title="Trust Us Because"
            data={cardData}
            gap="4rem"
          />
        </div>
      )} */}
      {/* <div className={styles.cardContainer}></div> */}
    </div>
  );
};

export default Services;
