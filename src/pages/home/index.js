import React from "react";
import styles from "./Home.module.css";
import LandingSection from "../../components/landing";
import OurServices from "../../components/our-services";
import Carousel from "../../components/Carousel";
import Slider from "../../components/slider/Slider";
import RecentAccomplishment from "../../components/recent-accomplisment";
import Headlines from "../../components/headlines/Headlines";
import Footer from "../../components/footer/Footer";
import About from "../../components/about";
import HighlightSlider from "../../components/highlight-slider";
import hsi4 from "../../assets/hsi-4.jpg";
import hsi2 from "../../assets/hsi-2.jpg";
import hsi3 from "../../assets/hsi-3.jpeg";
import hsi from "../../assets/hsi-1.jpg";
import SingleSlideCarousel from "../../components/single-slide-carousel";
import bookmyshow from "../../assets/bookmyshow.png";
import tinder from "../../assets/tinder.png";
import porsche from "../../assets/porsche.png";
import puma from "../../assets/puma.jpg";
import marriot from "../../assets/marriot.png";
import bni from "../../assets/bni.png";
import eema from "../../assets/eema.png";
import para from "../../assets/para.png";
import NewSlider from "../../components/new-slider";

import news2 from "../../assets/news-2.jpg";
import news3 from "../../assets/news-3.jpg";
import news from "../../assets/news-1.jpg";

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
  const testimonialsArrays = [
    {
      id: 1,
      image: bookmyshow,
      heading: "Raashi Sanghvi",
      text: "Collaborating with Trinity’s production team has been an absolute pleasure. From YouTube Fan Fest to Nykaaland, their professionalism and creativity make them our go-to partners. Here’s to many more!",
    },
    {
      id: 2,
      image: tinder,
      heading: "Raunaq Kohli",
      text: "Literally our one-stop shop for everything—launches, activations, IP servicing, merchandising, and beyond. They always exceed expectations. Highly recommended!",
    },
    {
      id: 3,
      image: porsche,
      heading: "Varun Jhunjhunwala",
      text: "From concept to execution, Trinity Entertainment aces it every time. Their expertise has contributed to many of our successful events!",
    },
    {
      id: 4,
      image: puma,
      heading: "Deviena Shivasta",
      text: "Their deep understanding of brand values and ability to translate them into engaging experiences is remarkable. Kudos to the team!",
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
      image: para,
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
      image: para,
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
      image: para,
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
      image: para,
    },
  ];
  return (
    <div className={styles.container}>
      <LandingSection />
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
      <OurServices />
      <div className={styles.testimonialSection}>
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
      </div>
      <div className={styles.partnershipSection}>
        <Slider
          title="Our Partnership"
          autoPlay={true}
          items={sliderItems}
          showButtons={false}
        />
      </div>
      <div className={styles.newsSection}>
        <NewSlider title="In The News" items={newsArray} />
      </div>
      <About />
      <Carousel />
      <RecentAccomplishment />
      <Headlines />
    </div>
  );
}

export default Home;
