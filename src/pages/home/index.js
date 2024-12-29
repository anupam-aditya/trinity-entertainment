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

function Home() {
  return (
    <div className={styles.container}>
      <LandingSection />
      <About />
      <OurServices />
      <Carousel />
      <Slider />
      <RecentAccomplishment />
      <Headlines />
    </div>
  );
}

export default Home;
