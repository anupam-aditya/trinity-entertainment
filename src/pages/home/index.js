import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Home.module.css";
import LandingSection from "../../components/landing";
import OurServices from "../../components/our-services";
import Carousel from "../../components/Carousel";
import Slider from "../../components/slider/Slider";
import RecentAccomplishment from "../../components/recent-accomplisment";
import Headlines from "../../components/headlines/Headlines";
import About from "../../components/about";
import HighlightSlider from "../../components/highlight-slider";
import hsi4 from "../../assets/hsi-4.jpg";
import hsi2 from "../../assets/hsi-2.jpg";
import hsi3 from "../../assets/hsi-3.jpeg";
import hsi from "../../assets/hsi-1.jpg";
import bookmyshow from "../../assets/bookmyshow.png";
import tinder from "../../assets/tinder.png";
import porsche from "../../assets/porsche.png";
import puma from "../../assets/puma.jpg";
import marriot from "../../assets/marriot.png";
import bni from "../../assets/bni.png";
import eema from "../../assets/eema.png";
import NewSlider from "../../components/new-slider";
import news2 from "../../assets/news-2.jpg";
import news3 from "../../assets/news-3.jpg";
import news from "../../assets/news-1.jpg";
import lifeattrinity from "../../assets/lifeattrinity.jpeg";
import backgroundImage from "../../assets/carousel-backgroundImage.png";
import Highlight from "../../components/highlight";
import OurClients from "../../components/our-clients";
import OurServicesHome from "../../components/our-services-home";

function Home() {
  console.log("Home component rendering");

  const partnershipArray = [eema, bni, eema, bni];

  // Define section order
  const sectionOrder = [
    "highlight",
    "services",
    "testimonial",
    "partnership",
    "headline",
    "joinUs",
  ];

  // Track which sections are loaded (first two initially visible)
  const [loadedSections, setLoadedSections] = useState([
    "highlight",
    "services",
  ]);

  // Ref for the sentinel element
  const sentinelRef = useRef(null);

  // Section content data
  const imagesArray = [
    { id: 0, image: hsi },
    { id: 1, image: hsi2 },
    { id: 2, image: hsi3 },
    { id: 3, image: hsi4 },
  ];

  const testimonialsArrays = [
    {
      id: 1,
      title: "Raashi Sanghvi",
      text: "Collaborating with Trinity's production team has been an absolute pleasure. From YouTube Fan Fest to Nykaaland, their professionalism and creativity make them our go-to partners. Here's to many more!",
      img: bookmyshow,
      backgroundImg: backgroundImage,
    },
    {
      id: 2,
      title: "Raunaq Kohli",
      text: "Literally our one-stop shop for everything—launches, activations, IP servicing, merchandising, and beyond. They always exceed expectations. Highly recommended!",
      img: tinder,
      backgroundImg: backgroundImage,
    },
    {
      id: 3,
      title: "Varun Jhunjhunwala",
      text: "From concept to execution, Trinity Entertainment aces it every time. Their expertise has contributed to many of our successful events!",
      img: porsche,
      backgroundImg: backgroundImage,
    },
    {
      id: 4,
      title: "Deviena Shivasta",
      text: "Their deep understanding of brand values and ability to translate them into engaging experiences is remarkable. Kudos to the team!",
      img: puma,
      backgroundImg: backgroundImage,
    },
    {
      id: 5,
      text: "A big thank you to Trinity. Everything was on time and everyone was punctual. We reached the venue on time and also made back to the hotel on time.",
      title: "Dale Steyn, Legendary Cricketer",
      backgroundImg: backgroundImage,
    },
    {
      id: 6,
      text: "All the on-ground transportation has been organised really well & it was a seamless experience. Trinity was an absolute delight to work with.",
      title: "Sanjana Ganesan, Indian Sports Journalist, Anchor & Broadcaster",
      backgroundImg: backgroundImage,
    },
    {
      id: 7,
      text: "I was transported & taken around by Trinity. They were absolutely fantastic & professional.",
      title:
        "Shaun Pollock, South African Cricket Commentator & Former All-Format Captain",
      backgroundImg: backgroundImage,
    },
  ];

  // Function to check if all sections are loaded
  const allSectionsLoaded = useCallback(() => {
    return sectionOrder.every((section) => loadedSections.includes(section));
  }, [loadedSections, sectionOrder]);

  // Function to load the next section
  const loadNextSection = useCallback(() => {
    setLoadedSections((prevSections) => {
      // Find the next section to load
      const nextSectionIndex = sectionOrder.findIndex(
        (section) => !prevSections.includes(section)
      );

      // If all sections are loaded, return the current state
      if (nextSectionIndex === -1) {
        console.log("All sections loaded");
        return prevSections;
      }

      // Add the next section
      const nextSection = sectionOrder[nextSectionIndex];
      console.log(`Loading next section: ${nextSection}`);
      return [...prevSections, nextSection];
    });
  }, [sectionOrder]);

  // Set up the intersection observer
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          console.log("Sentinel is visible, loading next section");
          loadNextSection();

          // Check if all sections are loaded
          if (allSectionsLoaded()) {
            console.log("All sections loaded, removing sentinel");
            observer.unobserve(entry.target);

            // Remove sentinel from DOM
            if (entry.target && entry.target.parentNode) {
              entry.target.parentNode.removeChild(entry.target);
            }
          }
        }
      },
      {
        rootMargin: "0px 0px", // Load when sentinel is 200px from viewport
        threshold: 0.1,
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [loadNextSection, allSectionsLoaded]);

  // Check if a section should be rendered
  const isSectionLoaded = useCallback(
    (sectionId) => {
      return loadedSections.includes(sectionId);
    },
    [loadedSections]
  );

  // Determine if a section is an initial section (to avoid animation)
  const isInitialSection = useCallback((sectionId) => {
    return sectionId === "highlight" || sectionId === "services";
  }, []);

  // Get class for a section based on whether it's initial or not
  const getSectionClass = useCallback(
    (sectionId, baseClass) => {
      const classes = [baseClass];

      if (!isInitialSection(sectionId)) {
        classes.push(styles.sectionContainer);
      } else {
        classes.push(styles.initialSection);
      }

      return classes.join(" ");
    },
    [isInitialSection]
  );

  return (
    <div className={styles.container}>
      <LandingSection />

      {/* Highlight Section */}
      {isSectionLoaded("highlight") && (
        <div className={getSectionClass("highlight", styles.highlightSection)}>
          <HighlightSlider
            title="Create an Experience Like Never Before"
            subHeading="Your Brand, Our Mission"
            imagesArray={imagesArray}
            text={[
              "We are a team of experiential marketing visionaries passionate about crafting unforgettable brand experiences that drive visibility, awareness, and engagement",
              "At Trinity Entertainment, we don't just execute events—we bring brands to life. Our expertise lies in creating immersive, impactful experiences that forge lasting connections between brands and their audiences",
              "We collaborate closely with you to elevate your brand presence, ensuring every experience leaves a powerful and lasting impression. Our innovative approach and strategic execution transform ideas into meaningful brand interactions that captivate and inspire",
            ]}
            link={{ href: "/about", text: "Explore More" }}
          />
        </div>
      )}

      {/* Services Section */}
      {isSectionLoaded("services") && (
        <div className={getSectionClass("services", styles.servicesSection)}>
          <OurServicesHome />
        </div>
      )}

      {/* Testimonial Section */}
      {isSectionLoaded("testimonial") && (
        <div
          className={getSectionClass("testimonial", styles.testimonialSection)}
        >
          <Carousel items={testimonialsArrays} />
        </div>
      )}

      {/* Partnership Section */}
      {isSectionLoaded("partnership") && (
        <div
          className={getSectionClass("partnership", styles.partnershipSection)}
        >
          <OurClients
            title="Our"
            subHeading=""
            data={partnershipArray}
            titleHighlight="Partnership"
          />
        </div>
      )}

      {/* Headline Section */}
      {isSectionLoaded("headline") && (
        <div className={getSectionClass("headline", styles.headlineSection)}>
          <Headlines />
        </div>
      )}

      {/* Join Us Section */}
      {isSectionLoaded("joinUs") && (
        <div className={getSectionClass("joinUs", styles.joinUsSection)}>
          <Highlight
            data={{
              heading: "Join Our Team – #LifeAtTrinity",
              subHeading: "",
              text: [
                "We're a group of creative thinkers and marketing innovators who thrive on brainstorming, problem-solving, and pushing boundaries. Think of us as the Justice League of creativity, with a team that includes visionaries, strategists, and execution experts.",
                "At Trinity Entertainment, we foster a collaborative, hierarchy-free work environment where everyone's voice is valued. Whether you're an experienced pro or a rising talent, there's a place for you here.",
              ],
              imageUrl: lifeattrinity,
              link: {
                href: "/career",
                text: "Try your shot!",
              },
            }}
            imagePosition="left"
          />
        </div>
      )}

      {/* Invisible sentinel element for detecting scroll position */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        data-testid="load-more-sentinel"
        className={styles.sentinel}
      />
    </div>
  );
}

export default Home;

{
  /* <div className={styles.testimonialSection}>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialHeading}>
            <h2 className={styles.carouselHeading}>What Our</h2>
            <h2 className={styles.carouselHeading}>
              <p>
                <span className={styles.highlight}>Clients</span> Say About Us
              </p>
              <span className={styles.line}></span>
            </h2>
          </div>
          <SingleSlideCarousel
            items={testimonialsArrays}
            autoPlay={true}
            showButtons={true}
          />
        </div>
      </div> */
}
