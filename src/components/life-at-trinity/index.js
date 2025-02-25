import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./LifeAtTrinity.module.css";
import careerHighlightImage from "../../assets/career-highlight.jpeg";

const LifeAtTrinity = () => {
  const listItems = [
    "There’s no micromanagement",
    "Everyone’s voice is heard",
    "Laughter is the background score",
    "Meetings happen in cozy chairs, not stuffy boardrooms",
    "Dress codes are… well, your choice",
    "Casual brainstorming is encouraged, not mocked",
  ];

  return (
    <div className={styles["component-container"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["row"]}>
          <div className={styles["text-column"]}>
            <h1 className={styles["heading-h1"]}>LIFE AT TRINITY</h1>
            <h2 className={styles["heading-h2"]}>
              A Room Full of Stress-Busting Individuals Who Work Together
            </h2>
            <p className={styles["subheading"]}>
              (We know it’s hard to believe, but it is what it is)
            </p>
            <p className={styles["body-text"]}>
              Ever imagined a workplace where:
            </p>
            <p className={styles["body-text"]}>Sounds too good to be true?</p>
            <p
              className={styles["body-text"]}
              style={{ fontSize: "1.5rem", fontWeight: 500, color: "#ef4158" }}
            >
              Welcome to Trinity Entertainment
            </p>
            <p className={styles["body-text"]}>
              We believe creativity thrives when rules don’t suffocate ideas.
              Our work environment is informal, but the quality of our work?
              Uncompromisingly top-notch
            </p>
            <p
              className={styles["body-text"]}
              style={{ color: "#ef4158", fontWeight: 500 }}
            >
              PS: Snacking is our favorite hobby—join us at your own risk!
            </p>
          </div>
          <div className={styles["points-column"]}>
            <ul className={styles["workplace-list"]}>
              {listItems.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles["check-icon"]}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtTrinity;
