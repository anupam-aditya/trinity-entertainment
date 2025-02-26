import React from "react";
import styles from "./LandingSection.module.css";
import VideoIframe from "../common/videoIFrame";

const LandingSection = () => {
  return (
    <section className={styles.landingContainer}>
      <div className={styles.container}>
        <VideoIframe
          src="https://storage.cloud.google.com/storage-trinity-entertainment/LandingReel.mp4"
          responsive={true}
        />
      </div>
    </section>
  );
};

export default LandingSection;
