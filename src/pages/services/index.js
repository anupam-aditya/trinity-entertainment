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
import rowNavbar from "../../assets/rowNav.png";
import rowNavbar2 from "../../assets/rowNav2.png";
import rowNavbar3 from "../../assets/rowNav3.png";
import rowNavbar4 from "../../assets/rowNav4.png";
import rowNavbar5 from "../../assets/rowNav5.png";

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
      text: "Experiential Solutions",
      href: "/services/experential-solutions",
      description:
        "We create one-of-a-kind brand activations that immerse audiences in your brand story. From on-ground activations to multi-sensory experiences, we design moments that spark engagement and build emotional connections",
      img: rowNavbar,
    },
    {
      text: "IP Servicing",
      href: "/services/ip-servicing",
      description:
        "Have a great idea? Let’s make it a reality. We specialise in IP (Intellectual Property) development, execution, and monetisation, helping brands launch and scale proprietary experiences that become industry benchmarks",
      img: rowNavbar2,
    },
    {
      text: "Content Labs",
      href: "/services/content-labs",
      description:
        "We don’t just create experiences—we capture them. With our in-house production team, we bring brand stories to life through high-quality video production, photography, digital storytelling, and branded content",
      img: rowNavbar3,
    },
    {
      text: "Sports Operations, Management & Servicing",
      href: "/services/sports-management",
      description:
        "From sports event management to talent scouting and sponsorship activation, we offer end-to-end solutions that elevate the sports ecosystem and create unforgettable fan experiences",
      img: rowNavbar4,
    },
    {
      text: "Bespoke Experiences",
      href: "/services/bespoke",
      description:
        "Looking for something truly unique? Our custom experiential marketing solutions are tailor-made to break the clutter, grab attention, and ignite curiosity. Let’s create something extraordinary together",
      img: rowNavbar5,
    },
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
      {highlightData && (
        <div className={styles.servicesHighlightSection}>
          <Highlight
            containerClass={styles.highlightContainer}
            data={highlightData}
            headingSize="2.4rem"
            headingColor="#ef4158"
            showSeparation="true"
          />
        </div>
      )}
      <div className={styles.servicesNavigationSection}>
        <RowNavbar items={navItemsData} />
        {/* <OurServices /> */}
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
