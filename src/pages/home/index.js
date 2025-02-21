import React from "react";
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

function Home() {
  const imagesArray = [
    { id: 1, image: hsi },
    { id: 2, image: hsi2 },
    { id: 3, image: hsi3 },
    { id: 4, image: hsi4 },
  ];
  const newsArray = [
    {
      id: 1,
      image: news,
      title:
        "Trinity Entertainment & Strategic Consultants to produce Piyush Mishra debut US tour Ballimaaraan",
      cta: {
        label: "Read More",
        href: "",
      },
    },
    { id: 2, image: news2 },
    { id: 3, image: news3 },
    { id: 2, image: news2 },
    { id: 3, image: news3 },
    {
      id: 1,
      image: news,
      title:
        "Trinity Entertainment & Strategic Consultants to produce Piyush Mishra debut US tour Ballimaaraan",
      cta: {
        label: "Read More",
        href: "",
      },
    },
  ];
  const sliderItems = [
    {
      id: 1,
      image: eema,
    },
    {
      id: 2,
      image: bni,
    },
    {
      id: 3,
      image: marriot,
    },
    {
      id: 4,
      image: eema,
    },
    {
      id: 5,
      image: eema,
    },
    {
      id: 6,
      image: bni,
    },
    {
      id: 7,
      image: marriot,
    },
    {
      id: 8,
      image: eema,
    },
    {
      id: 9,
      image: eema,
    },
    {
      id: 10,
      image: bni,
    },
    {
      id: 11,
      image: marriot,
    },
    {
      id: 12,
      image: eema,
    },
    {
      id: 13,
      image: eema,
    },
    {
      id: 14,
      image: bni,
    },
    {
      id: 15,
      image: marriot,
    },
    {
      id: 16,
      image: eema,
    },
  ];
  const testimonialsArrays = [
    {
      id: 1,
      title: "Raashi Sanghvi",
      text: "Collaborating with Trinity’s production team has been an absolute pleasure. From YouTube Fan Fest to Nykaaland, their professionalism and creativity make them our go-to partners. Here’s to many more!",
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
  ];
  return (
    <div className={styles.container}>
      <LandingSection />
      <div className={styles.highlightSection}>
        <HighlightSlider
          title="Create an Experience Like Never Before"
          subHeading="Your Brand, Our Mission"
          imagesArray={imagesArray}
          text={[
            "We are a team of experiential marketing visionaries passionate about crafting unforgettable brand experiences that drive visibility, awareness, and engagement",
            "At Trinity Entertainment, we don’t just execute events—we bring brands to life. Our expertise lies in creating immersive, impactful experiences that forge lasting connections between brands and their audiences",
            "We collaborate closely with you to elevate your brand presence, ensuring every experience leaves a powerful and lasting impression. Our innovative approach and strategic execution transform ideas into meaningful brand interactions that captivate and inspire",
          ]}
        />
      </div>
      <div className={styles.servicesSection}>
        <OurServices />
      </div>
      <div className={styles.testimonialSection}>
        <Carousel items={testimonialsArrays} />
      </div>
      <div className={styles.partnershipSection}>
        <Slider
          title="Our Partnership"
          autoPlay={true}
          items={sliderItems}
          showButtons={false}
        />
      </div>
      <div className={styles.recentAccomplishmentSection}>
        <RecentAccomplishment />
      </div>
      <div className={styles.headlineSection}>
        <Headlines />
      </div>
      <div className={styles.joinUsSection}>
        <Highlight
          data={{
            heading: "Join Our Team – #LifeAtTrinity",
            subHeading: "",
            text: [
              "We’re a group of creative thinkers and marketing innovators who thrive on brainstorming, problem-solving, and pushing boundaries. Think of us as the Justice League of creativity, with a team that includes visionaries, strategists, and execution experts.",
              "At Trinity Entertainment, we foster a collaborative, hierarchy-free work environment where everyone’s voice is valued. Whether you’re an experienced pro or a rising talent, there’s a place for you here.",
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
      {/* <div className={styles.newsSection}>
        <NewSlider title="In The News" items={newsArray} />
      </div>
      <About /> */}
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
