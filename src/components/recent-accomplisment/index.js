import React from "react";
import styles from "./recent-accompliements.module.css";
import { useSnapCarousel } from "react-snap-carousel";
import acc1 from "../../assets/acc-1.png";
import acc2 from "../../assets/acc-2.png";
import mainAccomplishment from "../../assets/mainAccomplishment.png";

const RecentAccomplishment = ({ items }) => {
  const { scrollRef } = useSnapCarousel();
  const accomplishments = [
    {
      img: acc1,
      description: "Budweiser x FIFA World Cup Finals Screening",
      title: "Excellence in Mall Activation",
      link: "https://vimeo.com/902876007?share=copy",
    },
    {
      img: acc2,
      description: "NEXA Road to Lollapalooza",
      title: "Excellence in Road Show Activation",
      link: "https://vimeo.com/902872430?share=copy",
    },
    {
      img: acc1,
      description: "Muthoot Finance Vishwas Ki Tijori at Maha Kumbh Mela",
      title: "Best On-Ground Promotion",
      link: "https://vimeo.com/902874163?share=copy",
    },
    {
      img: acc2,
      description: "Muthoot Finance Vishwas Ki Tijori at Maha Kumbh Mela",
      title: "Best Use of Experiential Events",
      link: "https://vimeo.com/349636627?share=copy",
    },
  ];
  return (
    <div className={styles.recentAccomplishmentContainer}>
      <div className={styles.recentAccomplismentSlider} ref={scrollRef}>
        {accomplishments.map((accomplishment) => {
          return (
            <a
              href={accomplishment?.link}
              className={styles.recentAccomplismentItem}
              target="_blank"
            >
              <div>
                <img src={accomplishment.img} alt="Accomplishment" />
              </div>
              <h1 className={styles.title}>{accomplishment.title}</h1>
              <p className={styles.description}>{accomplishment.description}</p>
            </a>
          );
        })}
      </div>
      <div className={styles.mainAccomplishmentContainer}>
        <div className={styles.mainAccomplishment}>
          <div className={styles.mainAccomplishmentTitle}>
            <div className={styles.titleWrapper}>
              <span className={styles.highlight}>Recent</span>
              Accomplishments
              <span className={styles.line}></span>
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
