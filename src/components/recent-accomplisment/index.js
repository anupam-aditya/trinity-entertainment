// index.js
import React from "react";
import styles from "./recent-accompliements.module.css";
import { useSnapCarousel } from "react-snap-carousel";
import acc1 from "../../assets/acc-1.png";
import acc2 from "../../assets/acc-2.png";
import mainAccomplishment from "../../assets/mainAccomplishment.png";

const RecentAccomplishment = () => {
  const { scrollRef } = useSnapCarousel();
  const accomplishments = [
    {
      img: acc1,
      description:
        "Budweiser x FIFA World Cup Mall Screening Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Here's  How We Excelled In The Mall Activation",
    },
    {
      img: acc2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Here's  How We Excelled In The Mall Activation",
    },
  ];
  return (
    <div className={styles.recentAccomplishmentContainer}>
      <div className={styles.recentAccomplismentSlider} ref={scrollRef}>
        {accomplishments.map((accomplishment) => {
          return (
            <div className={styles.recentAccomplismentItem}>
              <img src={accomplishment.img} alt="Accomplishment" />
              <h1 className={styles.title}>{accomplishment.title}</h1>
              <p className={styles.description}>{accomplishment.description}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.mainAccomplishmentContainer}>
        <div className={styles.mainAccomplishment}>
          <div className={styles.mainAccomplishmentTitle}>
            <div className={styles.titleWrapper}>
              <span className={styles.highlight}>Recent</span>
              <div className={styles.accomplishmentLine}>
                <span>Accomplishments</span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
          <img
            className={styles.mainAccomplishmentImage}
            src={mainAccomplishment}
            alt="Main Accomplishment"
          />
          <p className={styles.mainAccomplishmentDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco. Laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit. Esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentAccomplishment;
