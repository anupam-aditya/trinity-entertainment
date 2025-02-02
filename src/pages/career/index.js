import React from "react";
import Form from "../../components/form";
import styles from "./Career.module.css";
import Features from "../../components/features";
import careerFormImage from "../../assets/career-form.jpg";
import careerHighlightImage from "../../assets/career-highlight.jpeg";
import Highlight from "../../components/highlight";
import TextSlider from "../../components/text-slider";

function Career() {
  const data = {
    heading: "A room of stress-busting individuals that work together",
    subHeading: "(We know it's hard to believe but it is what it is)",
    text: [
      "When you imagined a workplace where there is no room for micromanagement, everyone's voice is heard, laughter is a common sound, meetings are held in a circle of comfortable chairs, dress code is left up to your own discretion, and casual discussions are not mocked, it was probably us that sprang to mind. We believe that creativity may flourish when limitations are removed. Our method of operation is informal, yet the caliber of the work is just as impeccable. To learn more, come to our office.",
    ],
    imageUrl: careerHighlightImage,
  };
  const items = [
    {
      title: "Surbhi",
      text: "I'm proud to be part of a team that creates amazing events; from glamorous galas, huge sports events to exciting festivals. The best part? We get to do all this while still having time for our personal lives. And every project is unique so we are constantly growing with our skills.",
    },
    {
      title: "Darryl",
      text: "The genuine recognition of our efforts here makes every achievement feel even more rewarding. Building strong client relationships is second nature, making our work not just a job, but a fulfilling journey of connections.",
    },
    {
      title: "Chinmay",
      text: "A work space that excites me to go back to everyday. It’s like working with a bunch of event planning wizards who also happen to be your buddies. Growth and opportunities are something that you don’t have to worry at all for. Always a pleasure to be a part of this close knitted family.",
    },
    {
      title: "Clive",
      text: "I've been working with trinity for quite some time now and I won't exaggerate but I've never felt so comfortable working anywhere. I cherish everyday here, there is so much to learn even out of your department. No hierarchy, only effectiveness.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.highlightContainer}>
        <Highlight data={data} />
      </div>
      <div className={styles.sliderSection}>
        <TextSlider
          showButtons={true}
          showNavigation={false}
          title="Why work with trinity"
          subHeading="Hear it from the Humans of Trinity"
          text="We are more than colleagues, aye don’t get us wrong. We are a community who work together, we are collaborators who also support each other and are united by a shared passion, Trinity"
          items={items}
          textStyle={styles.textStyle}
          cardStyle={styles.sliderCard}
          headingStyle={styles.headingStyle}
          subHeadingStyle={styles.subHeadingStyle}
          sliderContainerStyle={styles.sliderContainer}
          carouselWrapperStyle={styles.carouselWrapperStyle}
        />
      </div>
      <div className={styles.valuesSection}>
        <Features
          title={"We value our values strongly"}
          grid={styles.grid}
          cardClass={styles.cardClass}
          containerClass={styles.valuesContainerClass}
        />
      </div>
      <div className={styles.formSection}>
        <p className={styles.sectionHeading}>
          Are you willing to be our new team-mate?
        </p>
        <div className={styles.formComponent}>
          <div className={styles.imageComponent}>
            <img
              className={styles.image}
              src={careerFormImage}
              alt="career-form"
            />
          </div>
          <Form containerClass={styles.form} />
        </div>
      </div>
    </div>
  );
}
export default Career;
