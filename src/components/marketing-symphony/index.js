import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHeart,
  faGuitar,
  faRedo,
  faMusic,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./MarketingSymphony.module.css";

const listItems = [
  {
    number: 1,
    text: "Your objectives are the baton, guiding the entire ensemble toward a unified vision",
    icon: faBullhorn,
  },
  {
    number: 2,
    text: "Your audience is at the heart of it all—we analyse demographics, behaviours, and preferences to create a campaign that truly resonates",
    icon: faHeart,
  },
  {
    number: 3,
    text: "Marketing channels are the instruments, each offering a unique voice that amplifies your brand message",
    icon: faGuitar,
  },
  {
    number: 4,
    text: "Brand consistency is the recurring motif that reinforces your identity across every touch-point",
    icon: faRedo,
  },
  {
    number: 5,
    text: "Creativity is the melody that captivates and inspires, making your brand unforgettable",
    icon: faMusic,
  },
  {
    number: 6,
    text: "Calls-to-action are the crescendos that drive engagement—whether it’s a purchase, subscription, or deeper brand interaction",
    icon: faVolumeUp,
  },
];

const MarketingSymphony = () => {
  return (
    <div className={styles["component-container"]}>
      <div className={styles["content-wrapper"]}>
        <h1 className={styles["heading"]}>
          Marketing is Like a Symphony—And We Are the Conductors
        </h1>
        <p className={styles["intro-paragraph"]}>
          Crafting the perfect marketing campaign is like orchestrating a
          symphony. Each element plays a crucial role, coming together in
          perfect harmony to create an unforgettable experience.
        </p>
        <div className={styles["list-section"]}>
          {listItems.map((item) => (
            <div key={item.number} className={styles["list-item"]}>
              <div className={styles["content"]}>
                <FontAwesomeIcon icon={item.icon} className={styles["icon"]} />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles["concluding-paragraph"]}>
          A great campaign requires vision, precision, and a deep understanding
          of both the brand and its audience. When all elements work in sync,
          the result is a breathtaking experience.
        </p>
      </div>
    </div>
  );
};

export default MarketingSymphony;
